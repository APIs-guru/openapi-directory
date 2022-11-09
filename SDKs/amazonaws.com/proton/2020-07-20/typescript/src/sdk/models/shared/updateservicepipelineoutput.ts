import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServicePipeline } from "./servicepipeline";


export class UpdateServicePipelineOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=pipeline" })
  pipeline: ServicePipeline;
}
