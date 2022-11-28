import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// IpRange
/** 
 * Describes an IP range used in a security group.
**/
export class IpRange extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cidrip?: string;

  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];
}
