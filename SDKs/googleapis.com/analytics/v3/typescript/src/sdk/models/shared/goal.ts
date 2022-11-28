import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GoalEventDetailsEventConditions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comparisonType" })
  comparisonType?: string;

  @SpeakeasyMetadata({ data: "json, name=comparisonValue" })
  comparisonValue?: string;

  @SpeakeasyMetadata({ data: "json, name=expression" })
  expression?: string;

  @SpeakeasyMetadata({ data: "json, name=matchType" })
  matchType?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// GoalEventDetails
/** 
 * Details for the goal of the type EVENT.
**/
export class GoalEventDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventConditions", elemType: GoalEventDetailsEventConditions })
  eventConditions?: GoalEventDetailsEventConditions[];

  @SpeakeasyMetadata({ data: "json, name=useEventValue" })
  useEventValue?: boolean;
}


// GoalParentLink
/** 
 * Parent link for a goal. Points to the view (profile) to which this goal belongs.
**/
export class GoalParentLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class GoalUrlDestinationDetailsSteps extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


// GoalUrlDestinationDetails
/** 
 * Details for the goal of the type URL_DESTINATION.
**/
export class GoalUrlDestinationDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caseSensitive" })
  caseSensitive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=firstStepRequired" })
  firstStepRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=matchType" })
  matchType?: string;

  @SpeakeasyMetadata({ data: "json, name=steps", elemType: GoalUrlDestinationDetailsSteps })
  steps?: GoalUrlDestinationDetailsSteps[];

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


// GoalVisitNumPagesDetails
/** 
 * Details for the goal of the type VISIT_NUM_PAGES.
**/
export class GoalVisitNumPagesDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comparisonType" })
  comparisonType?: string;

  @SpeakeasyMetadata({ data: "json, name=comparisonValue" })
  comparisonValue?: string;
}


// GoalVisitTimeOnSiteDetails
/** 
 * Details for the goal of the type VISIT_TIME_ON_SITE.
**/
export class GoalVisitTimeOnSiteDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comparisonType" })
  comparisonType?: string;

  @SpeakeasyMetadata({ data: "json, name=comparisonValue" })
  comparisonValue?: string;
}


// Goal
/** 
 * JSON template for Analytics goal resource.
**/
export class Goal extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=eventDetails" })
  eventDetails?: GoalEventDetails;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=internalWebPropertyId" })
  internalWebPropertyId?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parentLink" })
  parentLink?: GoalParentLink;

  @SpeakeasyMetadata({ data: "json, name=profileId" })
  profileId?: string;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: Date;

  @SpeakeasyMetadata({ data: "json, name=urlDestinationDetails" })
  urlDestinationDetails?: GoalUrlDestinationDetails;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;

  @SpeakeasyMetadata({ data: "json, name=visitNumPagesDetails" })
  visitNumPagesDetails?: GoalVisitNumPagesDetails;

  @SpeakeasyMetadata({ data: "json, name=visitTimeOnSiteDetails" })
  visitTimeOnSiteDetails?: GoalVisitTimeOnSiteDetails;

  @SpeakeasyMetadata({ data: "json, name=webPropertyId" })
  webPropertyId?: string;
}
