import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Errors that occurred during the portfolio share operation.
**/
export declare class ShareError extends SpeakeasyBase {
    accounts?: string[];
    error?: string;
    message?: string;
}
