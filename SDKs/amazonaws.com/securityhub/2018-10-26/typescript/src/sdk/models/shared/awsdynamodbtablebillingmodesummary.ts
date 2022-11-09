import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsDynamoDbTableBillingModeSummary
/** 
 * Provides information about the billing for read/write capacity on the table.
**/
export class AwsDynamoDbTableBillingModeSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=BillingMode" })
  billingMode?: string;

  @Metadata({ data: "json, name=LastUpdateToPayPerRequestDateTime" })
  lastUpdateToPayPerRequestDateTime?: string;
}
