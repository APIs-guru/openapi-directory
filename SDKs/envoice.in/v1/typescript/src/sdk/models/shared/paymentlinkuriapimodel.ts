import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PaymentLinkUriApiModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=Link" })
  link?: string;
}
