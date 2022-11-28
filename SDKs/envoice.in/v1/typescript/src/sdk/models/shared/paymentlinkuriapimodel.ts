import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PaymentLinkUriApiModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Link" })
  link?: string;
}
