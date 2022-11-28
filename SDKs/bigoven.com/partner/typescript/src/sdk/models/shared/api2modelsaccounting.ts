import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Api2ModelsAccounting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreditBalance, form, name=CreditBalance;" })
  creditBalance?: number;

  @SpeakeasyMetadata({ data: "json, name=MemberSince, form, name=MemberSince;" })
  memberSince?: Date;

  @SpeakeasyMetadata({ data: "json, name=PremiumExpiryDate, form, name=PremiumExpiryDate;" })
  premiumExpiryDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=UserLevel, form, name=UserLevel;" })
  userLevel?: string;
}
