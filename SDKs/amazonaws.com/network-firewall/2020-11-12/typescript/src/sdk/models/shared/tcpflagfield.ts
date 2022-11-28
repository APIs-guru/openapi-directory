import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TcpFlagEnum } from "./tcpflagenum";



// TcpFlagField
/** 
 * TCP flags and masks to inspect packets for, used in stateless rules <a>MatchAttributes</a> settings.
**/
export class TcpFlagField extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Flags" })
  flags: TcpFlagEnum[];

  @SpeakeasyMetadata({ data: "json, name=Masks" })
  masks?: TcpFlagEnum[];
}
