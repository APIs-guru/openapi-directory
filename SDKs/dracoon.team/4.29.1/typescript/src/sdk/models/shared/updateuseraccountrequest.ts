import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateUserAccountRequest
/** 
 * Request model for updating user account information
**/
export class UpdateUserAccountRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=acceptEULA" })
  acceptEula?: boolean;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=firstName" })
  firstName?: string;

  @Metadata({ data: "json, name=gender" })
  gender?: string;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=lastName" })
  lastName?: string;

  @Metadata({ data: "json, name=login" })
  login?: string;

  @Metadata({ data: "json, name=phone" })
  phone?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=userName" })
  userName?: string;
}
