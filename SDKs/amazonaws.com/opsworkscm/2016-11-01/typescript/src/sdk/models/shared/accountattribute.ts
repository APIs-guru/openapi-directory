import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AccountAttribute
/** 
 * Stores account attributes. 
**/
export class AccountAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Maximum" })
  maximum?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Used" })
  used?: number;
}
