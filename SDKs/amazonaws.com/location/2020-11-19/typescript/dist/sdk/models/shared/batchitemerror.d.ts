import { SpeakeasyBase } from "../../../internal/utils";
import { BatchItemErrorCodeEnum } from "./batchitemerrorcodeenum";
/**
 * Contains the batch request error details associated with the request.
**/
export declare class BatchItemError extends SpeakeasyBase {
    code?: BatchItemErrorCodeEnum;
    message?: string;
}
