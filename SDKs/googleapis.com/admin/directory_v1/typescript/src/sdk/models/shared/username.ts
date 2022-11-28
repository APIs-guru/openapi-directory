import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserName extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=familyName" })
  familyName?: string;

  @SpeakeasyMetadata({ data: "json, name=fullName" })
  fullName?: string;

  @SpeakeasyMetadata({ data: "json, name=givenName" })
  givenName?: string;
}
