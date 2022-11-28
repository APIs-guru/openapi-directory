import { SpeakeasyBase } from "../../../internal/utils";
import { Endpoint } from "./endpoint";
import { Experiment } from "./experiment";
import { FeatureGroup } from "./featuregroup";
import { ModelPackage } from "./modelpackage";
import { ModelPackageGroup } from "./modelpackagegroup";
import { Pipeline } from "./pipeline";
import { PipelineExecution } from "./pipelineexecution";
import { Project } from "./project";
import { TrainingJob } from "./trainingjob";
import { Trial } from "./trial";
import { TrialComponent } from "./trialcomponent";
/**
 * A single resource returned as part of the <a>Search</a> API response.
**/
export declare class SearchRecord extends SpeakeasyBase {
    endpoint?: Endpoint;
    experiment?: Experiment;
    featureGroup?: FeatureGroup;
    modelPackage?: ModelPackage;
    modelPackageGroup?: ModelPackageGroup;
    pipeline?: Pipeline;
    pipelineExecution?: PipelineExecution;
    project?: Project;
    trainingJob?: TrainingJob;
    trial?: Trial;
    trialComponent?: TrialComponent;
}
