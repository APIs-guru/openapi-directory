import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EndpointInput } from "./endpointinput";
import { MonitoringGroundTruthS3Input } from "./monitoringgroundtruths3input";


// ModelQualityJobInput
/** 
 * The input for the model quality monitoring job. Currently endponts are supported for input for model quality monitoring jobs.
**/
export class ModelQualityJobInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointInput" })
  endpointInput: EndpointInput;

  @Metadata({ data: "json, name=GroundTruthS3Input" })
  groundTruthS3Input: MonitoringGroundTruthS3Input;
}
