import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BigOvenModelApiUserInfoTiny extends SpeakeasyBase {
  @Metadata({ data: "json, name=FirstName" })
  firstName?: string;

  @Metadata({ data: "json, name=LastName" })
  lastName?: string;

  @Metadata({ data: "json, name=PhotoUrl" })
  photoUrl?: string;

  @Metadata({ data: "json, name=UserID" })
  userId?: number;

  @Metadata({ data: "json, name=UserName" })
  userName?: string;
}
