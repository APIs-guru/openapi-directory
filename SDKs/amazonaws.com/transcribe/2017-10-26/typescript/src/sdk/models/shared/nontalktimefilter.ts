import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AbsoluteTimeRange } from "./absolutetimerange";
import { RelativeTimeRange } from "./relativetimerange";


// NonTalkTimeFilter
/** 
 * An object that enables you to configure your category to be applied to call analytics jobs where either the customer or agent was interrupted.
**/
export class NonTalkTimeFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=AbsoluteTimeRange" })
  absoluteTimeRange?: AbsoluteTimeRange;

  @Metadata({ data: "json, name=Negate" })
  negate?: boolean;

  @Metadata({ data: "json, name=RelativeTimeRange" })
  relativeTimeRange?: RelativeTimeRange;

  @Metadata({ data: "json, name=Threshold" })
  threshold?: number;
}
