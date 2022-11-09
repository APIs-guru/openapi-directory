import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// User
/** 
 * User
**/
export class User extends SpeakeasyBase {
  @Metadata({ data: "json, name=$id" })
  dollarId: string;

  @Metadata({ data: "json, name=email" })
  email: string;

  @Metadata({ data: "json, name=emailVerification" })
  emailVerification: boolean;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=passwordUpdate" })
  passwordUpdate: number;

  @Metadata({ data: "json, name=prefs" })
  prefs: Map<string, any>;

  @Metadata({ data: "json, name=registration" })
  registration: number;

  @Metadata({ data: "json, name=status" })
  status: number;
}
