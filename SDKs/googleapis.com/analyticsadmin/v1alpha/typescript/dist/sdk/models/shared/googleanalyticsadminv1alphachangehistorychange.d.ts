import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource } from "./googleanalyticsadminv1alphachangehistorychangechangehistoryresource";
export declare enum GoogleAnalyticsAdminV1alphaChangeHistoryChangeActionEnum {
    ActionTypeUnspecified = "ACTION_TYPE_UNSPECIFIED",
    Created = "CREATED",
    Updated = "UPDATED",
    Deleted = "DELETED"
}
/**
 * A description of a change to a single Google Analytics resource.
**/
export declare class GoogleAnalyticsAdminV1alphaChangeHistoryChange extends SpeakeasyBase {
    action?: GoogleAnalyticsAdminV1alphaChangeHistoryChangeActionEnum;
    resource?: string;
    resourceAfterChange?: GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource;
    resourceBeforeChange?: GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource;
}
