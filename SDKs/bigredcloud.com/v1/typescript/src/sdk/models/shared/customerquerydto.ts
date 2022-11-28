import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EftBankDto } from "./eftbankdto";



export class CustomerQueryDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountName" })
  accountName?: string;

  @SpeakeasyMetadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string[];

  @SpeakeasyMetadata({ data: "json, name=authCode" })
  authCode?: string;

  @SpeakeasyMetadata({ data: "json, name=bank" })
  bank?: EftBankDto;

  @SpeakeasyMetadata({ data: "json, name=businessIdentifierCode" })
  businessIdentifierCode?: string;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=contact" })
  contact?: string;

  @SpeakeasyMetadata({ data: "json, name=delivery" })
  delivery?: string[];

  @SpeakeasyMetadata({ data: "json, name=eFTReference" })
  eFtReference?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=fax" })
  fax?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=internationalBankAccountNumber" })
  internationalBankAccountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=mobile" })
  mobile?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ourCode" })
  ourCode?: string;

  @SpeakeasyMetadata({ data: "json, name=ownerTypeId" })
  ownerTypeId?: number;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=vatAnalysisTypeId" })
  vatAnalysisTypeId?: number;

  @SpeakeasyMetadata({ data: "json, name=vatReg" })
  vatReg?: string;

  @SpeakeasyMetadata({ data: "json, name=vatType" })
  vatType?: number;
}
