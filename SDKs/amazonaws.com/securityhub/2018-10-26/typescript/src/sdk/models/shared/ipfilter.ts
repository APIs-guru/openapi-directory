import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IpFilter
/** 
 * The IP filter for querying findings.
**/
export class IpFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Cidr" })
  cidr?: string;
}
