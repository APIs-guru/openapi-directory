import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppSpecification } from "./appspecification";
import { ExperimentConfig } from "./experimentconfig";
import { NetworkConfig } from "./networkconfig";
import { ProcessingInput } from "./processinginput";
import { ProcessingOutputConfig } from "./processingoutputconfig";
import { ProcessingResources } from "./processingresources";
import { ProcessingStoppingCondition } from "./processingstoppingcondition";
import { Tag } from "./tag";



export class CreateProcessingJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppSpecification" })
  appSpecification: AppSpecification;

  @SpeakeasyMetadata({ data: "json, name=Environment" })
  environment?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=ExperimentConfig" })
  experimentConfig?: ExperimentConfig;

  @SpeakeasyMetadata({ data: "json, name=NetworkConfig" })
  networkConfig?: NetworkConfig;

  @SpeakeasyMetadata({ data: "json, name=ProcessingInputs", elemType: ProcessingInput })
  processingInputs?: ProcessingInput[];

  @SpeakeasyMetadata({ data: "json, name=ProcessingJobName" })
  processingJobName: string;

  @SpeakeasyMetadata({ data: "json, name=ProcessingOutputConfig" })
  processingOutputConfig?: ProcessingOutputConfig;

  @SpeakeasyMetadata({ data: "json, name=ProcessingResources" })
  processingResources: ProcessingResources;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=StoppingCondition" })
  stoppingCondition?: ProcessingStoppingCondition;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
