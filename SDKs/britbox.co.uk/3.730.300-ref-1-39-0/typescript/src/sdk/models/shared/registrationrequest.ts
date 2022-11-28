import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegistrationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=marketing" })
  marketing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=pin" })
  pin?: string;

  @SpeakeasyMetadata({ data: "json, name=segments" })
  segments?: string[];
}
