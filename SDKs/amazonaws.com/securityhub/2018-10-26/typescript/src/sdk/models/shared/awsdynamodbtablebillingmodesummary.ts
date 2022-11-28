import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsDynamoDbTableBillingModeSummary
/** 
 * Provides information about the billing for read/write capacity on the table.
**/
export class AwsDynamoDbTableBillingModeSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BillingMode" })
  billingMode?: string;

  @SpeakeasyMetadata({ data: "json, name=LastUpdateToPayPerRequestDateTime" })
  lastUpdateToPayPerRequestDateTime?: string;
}
