import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// User
/** 
 * This complex type identifies an eBay user.
**/
export class User extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maskedUsername" })
  maskedUsername?: string;
}
