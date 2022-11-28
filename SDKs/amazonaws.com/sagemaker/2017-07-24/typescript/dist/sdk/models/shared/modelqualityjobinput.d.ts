import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointInput } from "./endpointinput";
import { MonitoringGroundTruthS3Input } from "./monitoringgroundtruths3input";
/**
 * The input for the model quality monitoring job. Currently endponts are supported for input for model quality monitoring jobs.
**/
export declare class ModelQualityJobInput extends SpeakeasyBase {
    endpointInput: EndpointInput;
    groundTruthS3Input: MonitoringGroundTruthS3Input;
}
