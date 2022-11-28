import { SpeakeasyBase } from "../../../internal/utils";
export declare enum BatchRequestActionMethodEnum {
    Get = "get",
    Post = "post",
    Put = "put",
    Delete = "delete",
    Patch = "patch",
    Head = "head"
}
/**
 * Pagination (`limit` and `offset`) and output options (`fields` or `expand`) for the action. “Pretty” JSON output is not an available option on individual actions; if you want pretty output, specify that option on the parent request.
**/
export declare class BatchRequestActionOptions extends SpeakeasyBase {
    fields?: string[];
    limit?: number;
    offset?: number;
}
/**
 * An action object for use in a batch request.
**/
export declare class BatchRequestAction extends SpeakeasyBase {
    data?: Map<string, any>;
    method: BatchRequestActionMethodEnum;
    options?: BatchRequestActionOptions;
    relativePath: string;
}
