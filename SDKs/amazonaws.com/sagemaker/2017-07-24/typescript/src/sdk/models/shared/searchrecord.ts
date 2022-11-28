import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=Endpoint" })
  endpoint?: Endpoint;

  @SpeakeasyMetadata({ data: "json, name=Experiment" })
  experiment?: Experiment;

  @SpeakeasyMetadata({ data: "json, name=FeatureGroup" })
  featureGroup?: FeatureGroup;

  @SpeakeasyMetadata({ data: "json, name=ModelPackage" })
  modelPackage?: ModelPackage;

  @SpeakeasyMetadata({ data: "json, name=ModelPackageGroup" })
  modelPackageGroup?: ModelPackageGroup;

  @SpeakeasyMetadata({ data: "json, name=Pipeline" })
  pipeline?: Pipeline;

  @SpeakeasyMetadata({ data: "json, name=PipelineExecution" })
  pipelineExecution?: PipelineExecution;

  @SpeakeasyMetadata({ data: "json, name=Project" })
  project?: Project;

  @SpeakeasyMetadata({ data: "json, name=TrainingJob" })
  trainingJob?: TrainingJob;

  @SpeakeasyMetadata({ data: "json, name=Trial" })
  trial?: Trial;

  @SpeakeasyMetadata({ data: "json, name=TrialComponent" })
  trialComponent?: TrialComponent;
}
