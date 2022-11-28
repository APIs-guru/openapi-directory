import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The objective progress for the currently-selected metric definition, to be displayed on the emblem nameplate.
**/
export declare class DestinyEntitiesItemsDestinyItemComponentMetricObjective extends SpeakeasyBase {
    activityHash?: number;
    complete?: boolean;
    completionValue?: number;
    destinationHash?: number;
    objectiveHash?: number;
    progress?: number;
    visible?: boolean;
}
/**
 * The base item component, filled with properties that are generally useful to know in any item request or that don't feel worthwhile to put in their own component.
**/
export declare class DestinyEntitiesItemsDestinyItemComponent extends SpeakeasyBase {
    bindStatus?: number;
    bucketHash?: number;
    expirationDate?: Date;
    isWrapper?: boolean;
    itemHash?: number;
    itemInstanceId?: number;
    itemValueVisibility?: boolean[];
    location?: number;
    lockable?: boolean;
    metricHash?: number;
    metricObjective?: DestinyEntitiesItemsDestinyItemComponentMetricObjective;
    overrideStyleItemHash?: number;
    quantity?: number;
    state?: number;
    tooltipNotificationIndexes?: number[];
    transferStatus?: number;
    versionNumber?: number;
}
