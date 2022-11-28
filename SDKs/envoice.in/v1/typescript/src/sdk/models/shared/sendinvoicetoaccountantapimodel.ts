import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SendInvoiceToAccountantApiModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id, form, name=Id;" })
  id?: number;
}
