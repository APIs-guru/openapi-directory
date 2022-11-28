import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=fullName" })
  fullName?: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}
