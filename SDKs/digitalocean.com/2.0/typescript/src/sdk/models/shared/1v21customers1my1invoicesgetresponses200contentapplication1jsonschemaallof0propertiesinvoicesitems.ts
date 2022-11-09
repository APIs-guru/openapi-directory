import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Onev21customers1my1invoicesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesInvoicesItems
/** 
 * The invoice preview.
**/
export class Onev21customers1my1invoicesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesInvoicesItems extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: string;

  @Metadata({ data: "json, name=invoice_period" })
  invoicePeriod?: string;

  @Metadata({ data: "json, name=invoice_uuid" })
  invoiceUuid?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}
