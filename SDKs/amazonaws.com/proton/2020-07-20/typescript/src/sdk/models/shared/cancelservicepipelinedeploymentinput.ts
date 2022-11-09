import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CancelServicePipelineDeploymentInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=serviceName" })
  serviceName: string;
}
