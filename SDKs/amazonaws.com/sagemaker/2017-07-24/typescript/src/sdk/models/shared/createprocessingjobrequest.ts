import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AppSpecification } from "./appspecification";
import { ExperimentConfig } from "./experimentconfig";
import { NetworkConfig } from "./networkconfig";
import { ProcessingInput } from "./processinginput";
import { ProcessingOutputConfig } from "./processingoutputconfig";
import { ProcessingResources } from "./processingresources";
import { ProcessingStoppingCondition } from "./processingstoppingcondition";
import { Tag } from "./tag";


export class CreateProcessingJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppSpecification" })
  appSpecification: AppSpecification;

  @Metadata({ data: "json, name=Environment" })
  environment?: Map<string, string>;

  @Metadata({ data: "json, name=ExperimentConfig" })
  experimentConfig?: ExperimentConfig;

  @Metadata({ data: "json, name=NetworkConfig" })
  networkConfig?: NetworkConfig;

  @Metadata({ data: "json, name=ProcessingInputs", elemType: shared.ProcessingInput })
  processingInputs?: ProcessingInput[];

  @Metadata({ data: "json, name=ProcessingJobName" })
  processingJobName: string;

  @Metadata({ data: "json, name=ProcessingOutputConfig" })
  processingOutputConfig?: ProcessingOutputConfig;

  @Metadata({ data: "json, name=ProcessingResources" })
  processingResources: ProcessingResources;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=StoppingCondition" })
  stoppingCondition?: ProcessingStoppingCondition;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
