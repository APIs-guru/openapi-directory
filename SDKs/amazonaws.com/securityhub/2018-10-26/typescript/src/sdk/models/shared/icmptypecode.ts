import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IcmpTypeCode
/** 
 * An Internet Control Message Protocol (ICMP) type and code.
**/
export class IcmpTypeCode extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: number;

  @Metadata({ data: "json, name=Type" })
  type?: number;
}
