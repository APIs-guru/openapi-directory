import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PortRange
/** 
 * A range of ports.
**/
export class PortRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Begin" })
  begin?: number;

  @SpeakeasyMetadata({ data: "json, name=End" })
  end?: number;
}
