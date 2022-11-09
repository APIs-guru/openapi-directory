import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegistrationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email: string;

  @Metadata({ data: "json, name=firstName" })
  firstName?: string;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=lastName" })
  lastName?: string;

  @Metadata({ data: "json, name=marketing" })
  marketing?: boolean;

  @Metadata({ data: "json, name=password" })
  password: string;

  @Metadata({ data: "json, name=pin" })
  pin?: string;

  @Metadata({ data: "json, name=segments" })
  segments?: string[];
}
