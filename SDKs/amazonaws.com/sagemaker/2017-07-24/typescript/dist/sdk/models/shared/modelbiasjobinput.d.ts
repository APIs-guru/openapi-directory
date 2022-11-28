import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointInput } from "./endpointinput";
import { MonitoringGroundTruthS3Input } from "./monitoringgroundtruths3input";
/**
 * Inputs for the model bias job.
**/
export declare class ModelBiasJobInput extends SpeakeasyBase {
    endpointInput: EndpointInput;
    groundTruthS3Input: MonitoringGroundTruthS3Input;
}
