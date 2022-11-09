import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RemoteFunctionOptions
/** 
 * Options for a remote user-defined function.
**/
export class RemoteFunctionOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=connection" })
  connection?: string;

  @Metadata({ data: "json, name=endpoint" })
  endpoint?: string;

  @Metadata({ data: "json, name=maxBatchingRows" })
  maxBatchingRows?: string;

  @Metadata({ data: "json, name=userDefinedContext" })
  userDefinedContext?: Map<string, string>;
}
