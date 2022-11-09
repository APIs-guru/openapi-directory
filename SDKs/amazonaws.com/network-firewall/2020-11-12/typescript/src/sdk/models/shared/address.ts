import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Address
/** 
 * A single IP address specification. This is used in the <a>MatchAttributes</a> source and destination specifications.
**/
export class Address extends SpeakeasyBase {
  @Metadata({ data: "json, name=AddressDefinition" })
  addressDefinition: string;
}
