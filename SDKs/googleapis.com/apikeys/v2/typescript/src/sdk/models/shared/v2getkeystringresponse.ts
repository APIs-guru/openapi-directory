import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// V2GetKeyStringResponse
/** 
 * Response message for `GetKeyString` method.
**/
export class V2GetKeyStringResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=keyString" })
  keyString?: string;
}
