import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CancelServicePipelineDeploymentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName: string;
}
