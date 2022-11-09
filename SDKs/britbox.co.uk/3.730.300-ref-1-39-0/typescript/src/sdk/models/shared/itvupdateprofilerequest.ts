import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ItvUpdateProfileRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=dateOfBirth" })
  dateOfBirth?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=firstName" })
  firstName?: string;

  @Metadata({ data: "json, name=lastName" })
  lastName?: string;

  @Metadata({ data: "json, name=postcode" })
  postcode?: string;

  @Metadata({ data: "json, name=profileToken" })
  profileToken: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
