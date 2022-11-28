import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UserRef
/** 
 * JSON template for a user reference.
**/
export class UserRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
