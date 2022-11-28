import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EndpointInput } from "./endpointinput";
import { MonitoringGroundTruthS3Input } from "./monitoringgroundtruths3input";



// ModelBiasJobInput
/** 
 * Inputs for the model bias job.
**/
export class ModelBiasJobInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointInput" })
  endpointInput: EndpointInput;

  @SpeakeasyMetadata({ data: "json, name=GroundTruthS3Input" })
  groundTruthS3Input: MonitoringGroundTruthS3Input;
}
