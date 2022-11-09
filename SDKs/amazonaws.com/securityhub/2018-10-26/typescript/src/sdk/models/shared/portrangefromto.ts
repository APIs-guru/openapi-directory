import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PortRangeFromTo
/** 
 * A range of ports.
**/
export class PortRangeFromTo extends SpeakeasyBase {
  @Metadata({ data: "json, name=From" })
  from?: number;

  @Metadata({ data: "json, name=To" })
  to?: number;
}
