import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServicePipeline } from "./servicepipeline";



export class CancelServicePipelineDeploymentOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pipeline" })
  pipeline: ServicePipeline;
}
