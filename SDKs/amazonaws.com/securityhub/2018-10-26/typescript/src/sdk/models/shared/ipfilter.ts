import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IpFilter
/** 
 * The IP filter for querying findings.
**/
export class IpFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Cidr" })
  cidr?: string;
}
