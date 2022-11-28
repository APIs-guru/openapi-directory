import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IpSet
/** 
 * A list of IP addresses and address ranges, in CIDR notation. This is part of a <a>RuleVariables</a>. 
**/
export class IpSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Definition" })
  definition: string[];
}
