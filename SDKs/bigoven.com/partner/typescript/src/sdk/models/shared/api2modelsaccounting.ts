import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Api2ModelsAccounting extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreditBalance, form, name=CreditBalance;" })
  creditBalance?: number;

  @Metadata({ data: "json, name=MemberSince, form, name=MemberSince;" })
  memberSince?: Date;

  @Metadata({ data: "json, name=PremiumExpiryDate, form, name=PremiumExpiryDate;" })
  premiumExpiryDate?: Date;

  @Metadata({ data: "json, name=UserLevel, form, name=UserLevel;" })
  userLevel?: string;
}
