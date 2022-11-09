import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Email
/** 
 * Email
**/
export class Email extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email: string;

  @Metadata({ data: "json, name=primary" })
  primary: boolean;

  @Metadata({ data: "json, name=verified" })
  verified: boolean;

  @Metadata({ data: "json, name=visibility" })
  visibility: string;
}
