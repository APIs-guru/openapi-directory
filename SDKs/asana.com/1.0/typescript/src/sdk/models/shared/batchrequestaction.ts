import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum BatchRequestActionMethodEnum {
    Get = "get"
,    Post = "post"
,    Put = "put"
,    Delete = "delete"
,    Patch = "patch"
,    Head = "head"
}


// BatchRequestActionOptions
/** 
 * Pagination (`limit` and `offset`) and output options (`fields` or `expand`) for the action. “Pretty” JSON output is not an available option on individual actions; if you want pretty output, specify that option on the parent request.
**/
export class BatchRequestActionOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields" })
  fields?: string[];

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=offset" })
  offset?: number;
}


// BatchRequestAction
/** 
 * An action object for use in a batch request.
**/
export class BatchRequestAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=method" })
  method: BatchRequestActionMethodEnum;

  @Metadata({ data: "json, name=options" })
  options?: BatchRequestActionOptions;

  @Metadata({ data: "json, name=relative_path" })
  relativePath: string;
}
