import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OperationTypeEnum } from "./operationtypeenum";


// BillingRecord
/** 
 * Information for one billing record.
**/
export class BillingRecord extends SpeakeasyBase {
  @Metadata({ data: "json, name=BillDate" })
  billDate?: Date;

  @Metadata({ data: "json, name=DomainName" })
  domainName?: string;

  @Metadata({ data: "json, name=InvoiceId" })
  invoiceId?: string;

  @Metadata({ data: "json, name=Operation" })
  operation?: OperationTypeEnum;

  @Metadata({ data: "json, name=Price" })
  price?: number;
}
