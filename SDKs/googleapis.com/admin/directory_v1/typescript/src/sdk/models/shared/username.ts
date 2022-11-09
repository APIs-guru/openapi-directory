import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UserName extends SpeakeasyBase {
  @Metadata({ data: "json, name=familyName" })
  familyName?: string;

  @Metadata({ data: "json, name=fullName" })
  fullName?: string;

  @Metadata({ data: "json, name=givenName" })
  givenName?: string;
}
