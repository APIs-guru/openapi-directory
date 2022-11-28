import { SpeakeasyBase } from "../../../internal/utils";
/**
 * All error responses, whether `4xx` or `5xx` will include one of these as the response
 * body.
**/
export declare class Error extends SpeakeasyBase {
    detail?: string;
    errorCode?: number;
    message?: string;
}
