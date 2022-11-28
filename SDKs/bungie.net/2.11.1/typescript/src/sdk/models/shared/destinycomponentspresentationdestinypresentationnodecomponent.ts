import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DestinyComponentsPresentationDestinyPresentationNodeComponentObjective
/** 
 * An optional property: presentation nodes MAY have objectives, which can be used to infer more human readable data about the progress. However, progressValue and completionValue ought to be considered the canonical values for progress on Progression Nodes.
**/
export class DestinyComponentsPresentationDestinyPresentationNodeComponentObjective extends SpeakeasyBase {
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


export class DestinyComponentsPresentationDestinyPresentationNodeComponent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  completionValue?: number;

  @SpeakeasyMetadata()
  objective?: DestinyComponentsPresentationDestinyPresentationNodeComponentObjective;

  @SpeakeasyMetadata()
  progressValue?: number;

  @SpeakeasyMetadata()
  recordCategoryScore?: number;

  @SpeakeasyMetadata()
  state?: number;
}
