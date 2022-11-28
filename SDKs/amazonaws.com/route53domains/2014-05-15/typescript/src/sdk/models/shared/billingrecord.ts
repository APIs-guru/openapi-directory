import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OperationTypeEnum } from "./operationtypeenum";



// BillingRecord
/** 
 * Information for one billing record.
**/
export class BillingRecord extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BillDate" })
  billDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName?: string;

  @SpeakeasyMetadata({ data: "json, name=InvoiceId" })
  invoiceId?: string;

  @SpeakeasyMetadata({ data: "json, name=Operation" })
  operation?: OperationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Price" })
  price?: number;
}
