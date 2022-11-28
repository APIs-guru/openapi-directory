import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OwnerOpeningBalanceVatEntryDto } from "./owneropeningbalancevatentrydto";



export class OwnerOpeningBalanceDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entryDate" })
  entryDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=isChanged" })
  isChanged?: boolean;

  @SpeakeasyMetadata({ data: "json, name=procDate" })
  procDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;

  @SpeakeasyMetadata({ data: "json, name=totalVAT" })
  totalVat?: number;

  @SpeakeasyMetadata({ data: "json, name=unpaid" })
  unpaid?: number;

  @SpeakeasyMetadata({ data: "json, name=vatEntries", elemType: OwnerOpeningBalanceVatEntryDto })
  vatEntries?: OwnerOpeningBalanceVatEntryDto[];
}
