import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AccountAttribute
/** 
 * Stores account attributes. 
**/
export class AccountAttribute extends SpeakeasyBase {
  @Metadata({ data: "json, name=Maximum" })
  maximum?: number;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Used" })
  used?: number;
}
