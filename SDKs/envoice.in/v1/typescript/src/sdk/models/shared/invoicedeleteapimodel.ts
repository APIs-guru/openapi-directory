import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InvoiceDeleteApiModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id, form, name=Id;" })
  id?: number;
}
