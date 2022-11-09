import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// User
/** 
 * This complex type identifies an eBay user.
**/
export class User extends SpeakeasyBase {
  @Metadata({ data: "json, name=maskedUsername" })
  maskedUsername?: string;
}
