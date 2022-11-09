import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CatchAll extends SpeakeasyBase {
  @Metadata({ data: "json, name=email_addresses" })
  emailAddresses?: string[];
}
