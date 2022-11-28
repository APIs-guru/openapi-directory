import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Email
/** 
 * Email
**/
export class Email extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=primary" })
  primary: boolean;

  @SpeakeasyMetadata({ data: "json, name=verified" })
  verified: boolean;

  @SpeakeasyMetadata({ data: "json, name=visibility" })
  visibility: string;
}
