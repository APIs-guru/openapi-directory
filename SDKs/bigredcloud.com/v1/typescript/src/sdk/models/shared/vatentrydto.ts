import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VatEntryDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=percentage" })
  percentage?: number;

  @Metadata({ data: "json, name=vatRateId" })
  vatRateId?: number;
}
