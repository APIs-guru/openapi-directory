import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class InvoiceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=downstream_id" })
  downstreamId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;
}
