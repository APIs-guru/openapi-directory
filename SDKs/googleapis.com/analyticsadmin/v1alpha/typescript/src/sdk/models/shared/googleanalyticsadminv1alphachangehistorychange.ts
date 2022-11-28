import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource } from "./googleanalyticsadminv1alphachangehistorychangechangehistoryresource";


export enum GoogleAnalyticsAdminV1alphaChangeHistoryChangeActionEnum {
    ActionTypeUnspecified = "ACTION_TYPE_UNSPECIFIED",
    Created = "CREATED",
    Updated = "UPDATED",
    Deleted = "DELETED"
}


// GoogleAnalyticsAdminV1alphaChangeHistoryChange
/** 
 * A description of a change to a single Google Analytics resource.
**/
export class GoogleAnalyticsAdminV1alphaChangeHistoryChange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: GoogleAnalyticsAdminV1alphaChangeHistoryChangeActionEnum;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceAfterChange" })
  resourceAfterChange?: GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource;

  @SpeakeasyMetadata({ data: "json, name=resourceBeforeChange" })
  resourceBeforeChange?: GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource;
}
