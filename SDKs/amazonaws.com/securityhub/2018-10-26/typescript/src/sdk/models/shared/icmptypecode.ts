import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IcmpTypeCode
/** 
 * An Internet Control Message Protocol (ICMP) type and code.
**/
export class IcmpTypeCode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: number;
}
