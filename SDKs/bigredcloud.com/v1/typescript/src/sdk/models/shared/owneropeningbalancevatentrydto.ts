import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OwnerOpeningBalanceVatEntryDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=vatRateId" })
  vatRateId?: number;
}
