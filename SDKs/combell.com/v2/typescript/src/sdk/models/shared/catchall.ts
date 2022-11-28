import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CatchAll extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email_addresses" })
  emailAddresses?: string[];
}
