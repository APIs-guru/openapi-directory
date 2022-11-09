import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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


// SearchRecord
/** 
 * A single resource returned as part of the <a>Search</a> API response.
**/
export class SearchRecord extends SpeakeasyBase {
  @Metadata({ data: "json, name=Endpoint" })
  endpoint?: Endpoint;

  @Metadata({ data: "json, name=Experiment" })
  experiment?: Experiment;

  @Metadata({ data: "json, name=FeatureGroup" })
  featureGroup?: FeatureGroup;

  @Metadata({ data: "json, name=ModelPackage" })
  modelPackage?: ModelPackage;

  @Metadata({ data: "json, name=ModelPackageGroup" })
  modelPackageGroup?: ModelPackageGroup;

  @Metadata({ data: "json, name=Pipeline" })
  pipeline?: Pipeline;

  @Metadata({ data: "json, name=PipelineExecution" })
  pipelineExecution?: PipelineExecution;

  @Metadata({ data: "json, name=Project" })
  project?: Project;

  @Metadata({ data: "json, name=TrainingJob" })
  trainingJob?: TrainingJob;

  @Metadata({ data: "json, name=Trial" })
  trial?: Trial;

  @Metadata({ data: "json, name=TrialComponent" })
  trialComponent?: TrialComponent;
}
