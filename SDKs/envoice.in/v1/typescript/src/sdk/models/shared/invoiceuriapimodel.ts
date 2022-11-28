import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InvoiceUriApiModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Link" })
  link?: string;
}
