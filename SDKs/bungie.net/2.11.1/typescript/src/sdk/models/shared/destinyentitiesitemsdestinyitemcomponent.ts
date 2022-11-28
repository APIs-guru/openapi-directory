import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DestinyEntitiesItemsDestinyItemComponentMetricObjective
/** 
 * The objective progress for the currently-selected metric definition, to be displayed on the emblem nameplate.
**/
export class DestinyEntitiesItemsDestinyItemComponentMetricObjective extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activityHash?: number;

  @SpeakeasyMetadata()
  complete?: boolean;

  @SpeakeasyMetadata()
  completionValue?: number;

  @SpeakeasyMetadata()
  destinationHash?: number;

  @SpeakeasyMetadata()
  objectiveHash?: number;

  @SpeakeasyMetadata()
  progress?: number;

  @SpeakeasyMetadata()
  visible?: boolean;
}


// DestinyEntitiesItemsDestinyItemComponent
/** 
 * The base item component, filled with properties that are generally useful to know in any item request or that don't feel worthwhile to put in their own component.
**/
export class DestinyEntitiesItemsDestinyItemComponent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bindStatus?: number;

  @SpeakeasyMetadata()
  bucketHash?: number;

  @SpeakeasyMetadata()
  expirationDate?: Date;

  @SpeakeasyMetadata()
  isWrapper?: boolean;

  @SpeakeasyMetadata()
  itemHash?: number;

  @SpeakeasyMetadata()
  itemInstanceId?: number;

  @SpeakeasyMetadata()
  itemValueVisibility?: boolean[];

  @SpeakeasyMetadata()
  location?: number;

  @SpeakeasyMetadata()
  lockable?: boolean;

  @SpeakeasyMetadata()
  metricHash?: number;

  @SpeakeasyMetadata()
  metricObjective?: DestinyEntitiesItemsDestinyItemComponentMetricObjective;

  @SpeakeasyMetadata()
  overrideStyleItemHash?: number;

  @SpeakeasyMetadata()
  quantity?: number;

  @SpeakeasyMetadata()
  state?: number;

  @SpeakeasyMetadata()
  tooltipNotificationIndexes?: number[];

  @SpeakeasyMetadata()
  transferStatus?: number;

  @SpeakeasyMetadata()
  versionNumber?: number;
}
