import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RemoteFunctionOptions
/** 
 * Options for a remote user-defined function.
**/
export class RemoteFunctionOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connection" })
  connection?: string;

  @SpeakeasyMetadata({ data: "json, name=endpoint" })
  endpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=maxBatchingRows" })
  maxBatchingRows?: string;

  @SpeakeasyMetadata({ data: "json, name=userDefinedContext" })
  userDefinedContext?: Map<string, string>;
}
