import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Parent link for an experiment. Points to the view (profile) to which this experiment belongs.
**/
export declare class ExperimentParentLink extends SpeakeasyBase {
    href?: string;
    type?: string;
}
export declare class ExperimentVariations extends SpeakeasyBase {
    name?: string;
    status?: string;
    url?: string;
    weight?: number;
    won?: boolean;
}
/**
 * JSON template for Analytics experiment resource.
**/
export declare class Experiment extends SpeakeasyBase {
    accountId?: string;
    created?: Date;
    description?: string;
    editableInGaUi?: boolean;
    endTime?: Date;
    equalWeighting?: boolean;
    id?: string;
    internalWebPropertyId?: string;
    kind?: string;
    minimumExperimentLengthInDays?: number;
    name?: string;
    objectiveMetric?: string;
    optimizationType?: string;
    parentLink?: ExperimentParentLink;
    profileId?: string;
    reasonExperimentEnded?: string;
    rewriteVariationUrlsAsOriginal?: boolean;
    selfLink?: string;
    servingFramework?: string;
    snippet?: string;
    startTime?: Date;
    status?: string;
    trafficCoverage?: number;
    updated?: Date;
    variations?: ExperimentVariations[];
    webPropertyId?: string;
    winnerConfidenceLevel?: number;
    winnerFound?: boolean;
}
