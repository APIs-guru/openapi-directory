import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ModelReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datasetId" })
  datasetId?: string;

  @SpeakeasyMetadata({ data: "json, name=modelId" })
  modelId?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;
}
