import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BigOvenModelApiUserInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=FirstName" })
  firstName?: string;

  @Metadata({ data: "json, name=ImageUrl48" })
  imageUrl48?: string;

  @Metadata({ data: "json, name=IsKitchenHelper" })
  isKitchenHelper?: boolean;

  @Metadata({ data: "json, name=IsPremium" })
  isPremium?: boolean;

  @Metadata({ data: "json, name=IsUsingRecurly" })
  isUsingRecurly?: boolean;

  @Metadata({ data: "json, name=LastName" })
  lastName?: string;

  @Metadata({ data: "json, name=MemberSince" })
  memberSince?: Date;

  @Metadata({ data: "json, name=PhotoUrl" })
  photoUrl?: string;

  @Metadata({ data: "json, name=PhotoUrl48" })
  photoUrl48?: string;

  @Metadata({ data: "json, name=PremiumExpiryDate" })
  premiumExpiryDate?: Date;

  @Metadata({ data: "json, name=UserID" })
  userId?: number;

  @Metadata({ data: "json, name=UserName" })
  userName?: string;

  @Metadata({ data: "json, name=WebUrl" })
  webUrl?: string;
}
