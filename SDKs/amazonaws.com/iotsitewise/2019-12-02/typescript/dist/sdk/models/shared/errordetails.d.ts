import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorCodeEnum } from "./errorcodeenum";
import { DetailedError } from "./detailederror";
/**
 * Contains the details of an IoT SiteWise error.
**/
export declare class ErrorDetails extends SpeakeasyBase {
    code: ErrorCodeEnum;
    details?: DetailedError[];
    message: string;
}
