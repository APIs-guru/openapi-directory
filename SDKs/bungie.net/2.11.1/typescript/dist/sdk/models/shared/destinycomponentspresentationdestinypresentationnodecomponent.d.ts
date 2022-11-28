import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An optional property: presentation nodes MAY have objectives, which can be used to infer more human readable data about the progress. However, progressValue and completionValue ought to be considered the canonical values for progress on Progression Nodes.
**/
export declare class DestinyComponentsPresentationDestinyPresentationNodeComponentObjective extends SpeakeasyBase {
    activityHash?: number;
    complete?: boolean;
    completionValue?: number;
    destinationHash?: number;
    objectiveHash?: number;
    progress?: number;
    visible?: boolean;
}
export declare class DestinyComponentsPresentationDestinyPresentationNodeComponent extends SpeakeasyBase {
    completionValue?: number;
    objective?: DestinyComponentsPresentationDestinyPresentationNodeComponentObjective;
    progressValue?: number;
    recordCategoryScore?: number;
    state?: number;
}
