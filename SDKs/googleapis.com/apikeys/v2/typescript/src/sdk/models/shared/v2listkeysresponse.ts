import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { V2Key } from "./v2key";


// V2ListKeysResponse
/** 
 * Response message for `ListKeys` method.
**/
export class V2ListKeysResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=keys", elemType: shared.V2Key })
  keys?: V2Key[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
