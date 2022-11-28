import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InvoiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=downstream_id" })
  downstreamId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
