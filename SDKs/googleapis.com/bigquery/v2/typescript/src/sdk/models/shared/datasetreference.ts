import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DatasetReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=datasetId" })
  datasetId?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;
}
