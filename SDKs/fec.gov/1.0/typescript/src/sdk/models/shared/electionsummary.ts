import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ElectionSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=disbursements" })
  disbursements?: number;

  @SpeakeasyMetadata({ data: "json, name=independent_expenditures" })
  independentExpenditures?: number;

  @SpeakeasyMetadata({ data: "json, name=receipts" })
  receipts?: number;
}
