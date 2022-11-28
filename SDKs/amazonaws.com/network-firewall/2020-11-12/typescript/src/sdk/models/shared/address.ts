import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Address
/** 
 * A single IP address specification. This is used in the <a>MatchAttributes</a> source and destination specifications.
**/
export class Address extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AddressDefinition" })
  addressDefinition: string;
}
