import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EftBankDto } from "./eftbankdto";
import { OwnerOpeningBalanceInPeriodsDto } from "./owneropeningbalanceinperiodsdto";
import { OwnerOpeningBalanceDto } from "./owneropeningbalancedto";


export class CustomerDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountName" })
  accountName?: string;

  @Metadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @Metadata({ data: "json, name=address" })
  address?: string[];

  @Metadata({ data: "json, name=authCode" })
  authCode?: string;

  @Metadata({ data: "json, name=bank" })
  bank?: EftBankDto;

  @Metadata({ data: "json, name=businessIdentifierCode" })
  businessIdentifierCode?: string;

  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=contact" })
  contact?: string;

  @Metadata({ data: "json, name=delivery" })
  delivery?: string[];

  @Metadata({ data: "json, name=eFTReference" })
  eFtReference?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=fax" })
  fax?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=internationalBankAccountNumber" })
  internationalBankAccountNumber?: string;

  @Metadata({ data: "json, name=ledgerBalance" })
  ledgerBalance?: number;

  @Metadata({ data: "json, name=mobile" })
  mobile?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=openingBalance" })
  openingBalance?: OwnerOpeningBalanceInPeriodsDto;

  @Metadata({ data: "json, name=openingBalances", elemType: shared.OwnerOpeningBalanceDto })
  openingBalances?: OwnerOpeningBalanceDto[];

  @Metadata({ data: "json, name=ourCode" })
  ourCode?: string;

  @Metadata({ data: "json, name=ownerTypeId" })
  ownerTypeId?: number;

  @Metadata({ data: "json, name=phone" })
  phone?: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @Metadata({ data: "json, name=vatAnalysisTypeId" })
  vatAnalysisTypeId?: number;

  @Metadata({ data: "json, name=vatReg" })
  vatReg?: string;

  @Metadata({ data: "json, name=vatType" })
  vatType?: number;
}
