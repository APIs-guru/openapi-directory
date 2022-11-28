import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { V2Key } from "./v2key";



// V2ListKeysResponse
/** 
 * Response message for `ListKeys` method.
**/
export class V2ListKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keys", elemType: V2Key })
  keys?: V2Key[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
