import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum BatchRequestActionMethodEnum {
    Get = "get",
    Post = "post",
    Put = "put",
    Delete = "delete",
    Patch = "patch",
    Head = "head"
}


// BatchRequestActionOptions
/** 
 * Pagination (`limit` and `offset`) and output options (`fields` or `expand`) for the action. “Pretty” JSON output is not an available option on individual actions; if you want pretty output, specify that option on the parent request.
**/
export class BatchRequestActionOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: string[];

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;
}


// BatchRequestAction
/** 
 * An action object for use in a batch request.
**/
export class BatchRequestAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method: BatchRequestActionMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: BatchRequestActionOptions;

  @SpeakeasyMetadata({ data: "json, name=relative_path" })
  relativePath: string;
}
