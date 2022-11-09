import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OwnerOpeningBalanceVatEntryDto } from "./owneropeningbalancevatentrydto";


export class OwnerOpeningBalanceDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=entryDate" })
  entryDate?: Date;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=isChanged" })
  isChanged?: boolean;

  @Metadata({ data: "json, name=procDate" })
  procDate?: Date;

  @Metadata({ data: "json, name=reference" })
  reference?: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @Metadata({ data: "json, name=total" })
  total?: number;

  @Metadata({ data: "json, name=totalVAT" })
  totalVat?: number;

  @Metadata({ data: "json, name=unpaid" })
  unpaid?: number;

  @Metadata({ data: "json, name=vatEntries", elemType: shared.OwnerOpeningBalanceVatEntryDto })
  vatEntries?: OwnerOpeningBalanceVatEntryDto[];
}
