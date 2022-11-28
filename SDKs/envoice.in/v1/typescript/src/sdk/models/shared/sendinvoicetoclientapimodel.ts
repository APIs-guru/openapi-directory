import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SendInvoiceToClientApiModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttachPdf, form, name=AttachPdf;" })
  attachPdf?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Id, form, name=Id;" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=InvoiceId, form, name=InvoiceId;" })
  invoiceId?: number;

  @SpeakeasyMetadata({ data: "json, name=Message, form, name=Message;" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=SendToSelf, form, name=SendToSelf;" })
  sendToSelf?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Subject, form, name=Subject;" })
  subject?: string;
}
