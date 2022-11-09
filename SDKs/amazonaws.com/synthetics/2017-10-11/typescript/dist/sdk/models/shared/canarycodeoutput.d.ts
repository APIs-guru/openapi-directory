import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * This structure contains information about the canary's Lambda handler and where its code is stored by CloudWatch Synthetics.
**/
export declare class CanaryCodeOutput extends SpeakeasyBase {
    handler?: string;
    sourceLocationArn?: string;
}
