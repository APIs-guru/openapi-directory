import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Error related to a specific channel, specified by its ARN.
**/
export declare class BatchError extends SpeakeasyBase {
    arn?: string;
    code?: string;
    message?: string;
}
