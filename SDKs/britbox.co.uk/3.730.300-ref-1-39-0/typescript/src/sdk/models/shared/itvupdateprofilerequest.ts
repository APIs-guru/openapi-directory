import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ItvUpdateProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dateOfBirth" })
  dateOfBirth?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=postcode" })
  postcode?: string;

  @SpeakeasyMetadata({ data: "json, name=profileToken" })
  profileToken: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
