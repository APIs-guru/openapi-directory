import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GoalEventDetailsEventConditions extends SpeakeasyBase {
  @Metadata({ data: "json, name=comparisonType" })
  comparisonType?: string;

  @Metadata({ data: "json, name=comparisonValue" })
  comparisonValue?: string;

  @Metadata({ data: "json, name=expression" })
  expression?: string;

  @Metadata({ data: "json, name=matchType" })
  matchType?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


// GoalEventDetails
/** 
 * Details for the goal of the type EVENT.
**/
export class GoalEventDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=eventConditions", elemType: shared.GoalEventDetailsEventConditions })
  eventConditions?: GoalEventDetailsEventConditions[];

  @Metadata({ data: "json, name=useEventValue" })
  useEventValue?: boolean;
}


// GoalParentLink
/** 
 * Parent link for a goal. Points to the view (profile) to which this goal belongs.
**/
export class GoalParentLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class GoalUrlDestinationDetailsSteps extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=number" })
  number?: number;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


// GoalUrlDestinationDetails
/** 
 * Details for the goal of the type URL_DESTINATION.
**/
export class GoalUrlDestinationDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=caseSensitive" })
  caseSensitive?: boolean;

  @Metadata({ data: "json, name=firstStepRequired" })
  firstStepRequired?: boolean;

  @Metadata({ data: "json, name=matchType" })
  matchType?: string;

  @Metadata({ data: "json, name=steps", elemType: shared.GoalUrlDestinationDetailsSteps })
  steps?: GoalUrlDestinationDetailsSteps[];

  @Metadata({ data: "json, name=url" })
  url?: string;
}


// GoalVisitNumPagesDetails
/** 
 * Details for the goal of the type VISIT_NUM_PAGES.
**/
export class GoalVisitNumPagesDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=comparisonType" })
  comparisonType?: string;

  @Metadata({ data: "json, name=comparisonValue" })
  comparisonValue?: string;
}


// GoalVisitTimeOnSiteDetails
/** 
 * Details for the goal of the type VISIT_TIME_ON_SITE.
**/
export class GoalVisitTimeOnSiteDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=comparisonType" })
  comparisonType?: string;

  @Metadata({ data: "json, name=comparisonValue" })
  comparisonValue?: string;
}


// Goal
/** 
 * JSON template for Analytics goal resource.
**/
export class Goal extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=eventDetails" })
  eventDetails?: GoalEventDetails;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=internalWebPropertyId" })
  internalWebPropertyId?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parentLink" })
  parentLink?: GoalParentLink;

  @Metadata({ data: "json, name=profileId" })
  profileId?: string;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=updated" })
  updated?: Date;

  @Metadata({ data: "json, name=urlDestinationDetails" })
  urlDestinationDetails?: GoalUrlDestinationDetails;

  @Metadata({ data: "json, name=value" })
  value?: number;

  @Metadata({ data: "json, name=visitNumPagesDetails" })
  visitNumPagesDetails?: GoalVisitNumPagesDetails;

  @Metadata({ data: "json, name=visitTimeOnSiteDetails" })
  visitTimeOnSiteDetails?: GoalVisitTimeOnSiteDetails;

  @Metadata({ data: "json, name=webPropertyId" })
  webPropertyId?: string;
}
