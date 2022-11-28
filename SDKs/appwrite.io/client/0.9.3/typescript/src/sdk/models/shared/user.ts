import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// User
/** 
 * User
**/
export class User extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=$id" })
  dollarId: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=emailVerification" })
  emailVerification: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=passwordUpdate" })
  passwordUpdate: number;

  @SpeakeasyMetadata({ data: "json, name=prefs" })
  prefs: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=registration" })
  registration: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}
