import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BigOvenModelApiUserInfoInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FirstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=ImageUrl48" })
  imageUrl48?: string;

  @SpeakeasyMetadata({ data: "json, name=IsKitchenHelper" })
  isKitchenHelper?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsPremium" })
  isPremium?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsUsingRecurly" })
  isUsingRecurly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=LastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=MemberSince" })
  memberSince?: Date;

  @SpeakeasyMetadata({ data: "json, name=PhotoUrl" })
  photoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=PremiumExpiryDate" })
  premiumExpiryDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=UserID" })
  userId?: number;

  @SpeakeasyMetadata({ data: "json, name=UserName" })
  userName?: string;
}


export class BigOvenModelApiUserInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FirstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=ImageUrl48" })
  imageUrl48?: string;

  @SpeakeasyMetadata({ data: "json, name=IsKitchenHelper" })
  isKitchenHelper?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsPremium" })
  isPremium?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsUsingRecurly" })
  isUsingRecurly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=LastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=MemberSince" })
  memberSince?: Date;

  @SpeakeasyMetadata({ data: "json, name=PhotoUrl" })
  photoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=PhotoUrl48" })
  photoUrl48?: string;

  @SpeakeasyMetadata({ data: "json, name=PremiumExpiryDate" })
  premiumExpiryDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=UserID" })
  userId?: number;

  @SpeakeasyMetadata({ data: "json, name=UserName" })
  userName?: string;

  @SpeakeasyMetadata({ data: "json, name=WebUrl" })
  webUrl?: string;
}
