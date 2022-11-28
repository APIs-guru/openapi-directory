import { SpeakeasyBase } from "../../../internal/utils";
export declare class GoalEventDetailsEventConditions extends SpeakeasyBase {
    comparisonType?: string;
    comparisonValue?: string;
    expression?: string;
    matchType?: string;
    type?: string;
}
/**
 * Details for the goal of the type EVENT.
**/
export declare class GoalEventDetails extends SpeakeasyBase {
    eventConditions?: GoalEventDetailsEventConditions[];
    useEventValue?: boolean;
}
/**
 * Parent link for a goal. Points to the view (profile) to which this goal belongs.
**/
export declare class GoalParentLink extends SpeakeasyBase {
    href?: string;
    type?: string;
}
export declare class GoalUrlDestinationDetailsSteps extends SpeakeasyBase {
    name?: string;
    number?: number;
    url?: string;
}
/**
 * Details for the goal of the type URL_DESTINATION.
**/
export declare class GoalUrlDestinationDetails extends SpeakeasyBase {
    caseSensitive?: boolean;
    firstStepRequired?: boolean;
    matchType?: string;
    steps?: GoalUrlDestinationDetailsSteps[];
    url?: string;
}
/**
 * Details for the goal of the type VISIT_NUM_PAGES.
**/
export declare class GoalVisitNumPagesDetails extends SpeakeasyBase {
    comparisonType?: string;
    comparisonValue?: string;
}
/**
 * Details for the goal of the type VISIT_TIME_ON_SITE.
**/
export declare class GoalVisitTimeOnSiteDetails extends SpeakeasyBase {
    comparisonType?: string;
    comparisonValue?: string;
}
/**
 * JSON template for Analytics goal resource.
**/
export declare class Goal extends SpeakeasyBase {
    accountId?: string;
    active?: boolean;
    created?: Date;
    eventDetails?: GoalEventDetails;
    id?: string;
    internalWebPropertyId?: string;
    kind?: string;
    name?: string;
    parentLink?: GoalParentLink;
    profileId?: string;
    selfLink?: string;
    type?: string;
    updated?: Date;
    urlDestinationDetails?: GoalUrlDestinationDetails;
    value?: number;
    visitNumPagesDetails?: GoalVisitNumPagesDetails;
    visitTimeOnSiteDetails?: GoalVisitTimeOnSiteDetails;
    webPropertyId?: string;
}
