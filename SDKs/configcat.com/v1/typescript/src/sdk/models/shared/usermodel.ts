import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UserModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=fullName" })
  fullName?: string;

  @Metadata({ data: "json, name=userId" })
  userId?: string;
}
