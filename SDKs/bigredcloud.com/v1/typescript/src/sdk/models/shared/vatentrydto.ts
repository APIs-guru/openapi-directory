import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VatEntryDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=percentage" })
  percentage?: number;

  @SpeakeasyMetadata({ data: "json, name=vatRateId" })
  vatRateId?: number;
}
