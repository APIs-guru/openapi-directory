import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// V2GetKeyStringResponse
/** 
 * Response message for `GetKeyString` method.
**/
export class V2GetKeyStringResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keyString" })
  keyString?: string;
}
