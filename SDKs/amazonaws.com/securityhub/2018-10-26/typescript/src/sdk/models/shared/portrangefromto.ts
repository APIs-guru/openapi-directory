import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PortRangeFromTo
/** 
 * A range of ports.
**/
export class PortRangeFromTo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=From" })
  from?: number;

  @SpeakeasyMetadata({ data: "json, name=To" })
  to?: number;
}
