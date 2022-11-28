import { SpeakeasyBase } from "../../../internal/utils";
import { AbsoluteTimeRange } from "./absolutetimerange";
import { RelativeTimeRange } from "./relativetimerange";
/**
 * An object that enables you to configure your category to be applied to call analytics jobs where either the customer or agent was interrupted.
**/
export declare class NonTalkTimeFilter extends SpeakeasyBase {
    absoluteTimeRange?: AbsoluteTimeRange;
    negate?: boolean;
    relativeTimeRange?: RelativeTimeRange;
    threshold?: number;
}
