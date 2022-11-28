import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AbsoluteTimeRange } from "./absolutetimerange";
import { RelativeTimeRange } from "./relativetimerange";



// NonTalkTimeFilter
/** 
 * An object that enables you to configure your category to be applied to call analytics jobs where either the customer or agent was interrupted.
**/
export class NonTalkTimeFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AbsoluteTimeRange" })
  absoluteTimeRange?: AbsoluteTimeRange;

  @SpeakeasyMetadata({ data: "json, name=Negate" })
  negate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RelativeTimeRange" })
  relativeTimeRange?: RelativeTimeRange;

  @SpeakeasyMetadata({ data: "json, name=Threshold" })
  threshold?: number;
}
