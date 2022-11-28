import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Error information
**/
export declare class ErrorResponse extends SpeakeasyBase {
    code: number;
    debugInfo?: string;
    errorCode?: number;
    message: string;
}
