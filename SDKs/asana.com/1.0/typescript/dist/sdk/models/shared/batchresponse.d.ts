import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A response object returned from a batch request.
**/
export declare class BatchResponse extends SpeakeasyBase {
    body?: Map<string, any>;
    headers?: Map<string, any>;
    statusCode?: number;
}
