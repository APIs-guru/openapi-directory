import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EndpointInput } from "./endpointinput";
import { MonitoringGroundTruthS3Input } from "./monitoringgroundtruths3input";


// ModelBiasJobInput
/** 
 * Inputs for the model bias job.
**/
export class ModelBiasJobInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointInput" })
  endpointInput: EndpointInput;

  @Metadata({ data: "json, name=GroundTruthS3Input" })
  groundTruthS3Input: MonitoringGroundTruthS3Input;
}
