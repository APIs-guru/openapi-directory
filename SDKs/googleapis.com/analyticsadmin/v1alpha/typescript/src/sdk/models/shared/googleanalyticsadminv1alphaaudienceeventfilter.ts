import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAudienceFilterExpression } from "./googleanalyticsadminv1alphaaudiencefilterexpression";



// GoogleAnalyticsAdminV1alphaAudienceEventFilter
/** 
 * A filter that matches events of a single event name. If an event parameter is specified, only the subset of events that match both the single event name and the parameter filter expressions match this event filter.
**/
export class GoogleAnalyticsAdminV1alphaAudienceEventFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventName" })
  eventName?: string;

  @SpeakeasyMetadata({ data: "json, name=eventParameterFilterExpression" })
  eventParameterFilterExpression?: GoogleAnalyticsAdminV1alphaAudienceFilterExpression;
}
