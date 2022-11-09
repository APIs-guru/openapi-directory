import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ElectionSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=disbursements" })
  disbursements?: number;

  @Metadata({ data: "json, name=independent_expenditures" })
  independentExpenditures?: number;

  @Metadata({ data: "json, name=receipts" })
  receipts?: number;
}
