import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateUserAccountRequest
/** 
 * Request model for updating user account information
**/
export class UpdateUserAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acceptEULA" })
  acceptEula?: boolean;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=gender" })
  gender?: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=login" })
  login?: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=userName" })
  userName?: string;
}
