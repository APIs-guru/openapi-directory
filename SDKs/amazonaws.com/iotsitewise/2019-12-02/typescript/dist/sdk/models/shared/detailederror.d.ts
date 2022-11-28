import { SpeakeasyBase } from "../../../internal/utils";
import { DetailedErrorCodeEnum } from "./detailederrorcodeenum";
/**
 * Contains detailed error information.
**/
export declare class DetailedError extends SpeakeasyBase {
    code: DetailedErrorCodeEnum;
    message: string;
}
