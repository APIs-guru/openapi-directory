import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ModelReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=datasetId" })
  datasetId?: string;

  @Metadata({ data: "json, name=modelId" })
  modelId?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;
}
