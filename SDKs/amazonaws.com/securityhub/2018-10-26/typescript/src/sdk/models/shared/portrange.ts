import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PortRange
/** 
 * A range of ports.
**/
export class PortRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=Begin" })
  begin?: number;

  @Metadata({ data: "json, name=End" })
  end?: number;
}
