import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BigOvenModelApiUserInfoTiny extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FirstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=LastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=PhotoUrl" })
  photoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=UserID" })
  userId?: number;

  @SpeakeasyMetadata({ data: "json, name=UserName" })
  userName?: string;
}
