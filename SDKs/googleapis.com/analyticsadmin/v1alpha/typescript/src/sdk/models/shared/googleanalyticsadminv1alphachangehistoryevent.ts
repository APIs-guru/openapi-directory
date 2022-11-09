import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAnalyticsAdminV1alphaChangeHistoryChange } from "./googleanalyticsadminv1alphachangehistorychange";

export enum GoogleAnalyticsAdminV1alphaChangeHistoryEventActorTypeEnum {
    ActorTypeUnspecified = "ACTOR_TYPE_UNSPECIFIED"
,    User = "USER"
,    System = "SYSTEM"
,    Support = "SUPPORT"
}


// GoogleAnalyticsAdminV1alphaChangeHistoryEvent
/** 
 * A set of changes within a Google Analytics account or its child properties that resulted from the same cause. Common causes would be updates made in the Google Analytics UI, changes from customer support, or automatic Google Analytics system changes.
**/
export class GoogleAnalyticsAdminV1alphaChangeHistoryEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=actorType" })
  actorType?: GoogleAnalyticsAdminV1alphaChangeHistoryEventActorTypeEnum;

  @Metadata({ data: "json, name=changeTime" })
  changeTime?: string;

  @Metadata({ data: "json, name=changes", elemType: shared.GoogleAnalyticsAdminV1alphaChangeHistoryChange })
  changes?: GoogleAnalyticsAdminV1alphaChangeHistoryChange[];

  @Metadata({ data: "json, name=changesFiltered" })
  changesFiltered?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=userActorEmail" })
  userActorEmail?: string;
}
