import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OwnerOpeningBalanceVatEntryDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=vatRateId" })
  vatRateId?: number;
}
