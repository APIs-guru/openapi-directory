import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAudienceFilterExpression } from "./googleanalyticsadminv1alphaaudiencefilterexpression";
/**
 * A filter that matches events of a single event name. If an event parameter is specified, only the subset of events that match both the single event name and the parameter filter expressions match this event filter.
**/
export declare class GoogleAnalyticsAdminV1alphaAudienceEventFilter extends SpeakeasyBase {
    eventName?: string;
    eventParameterFilterExpression?: GoogleAnalyticsAdminV1alphaAudienceFilterExpression;
}
