import { SpeakeasyBase } from "../../../internal/utils";
import { AppSpecification } from "./appspecification";
import { ExperimentConfig } from "./experimentconfig";
import { NetworkConfig } from "./networkconfig";
import { ProcessingInput } from "./processinginput";
import { ProcessingOutputConfig } from "./processingoutputconfig";
import { ProcessingResources } from "./processingresources";
import { ProcessingStoppingCondition } from "./processingstoppingcondition";
import { Tag } from "./tag";
export declare class CreateProcessingJobRequest extends SpeakeasyBase {
    appSpecification: AppSpecification;
    environment?: Map<string, string>;
    experimentConfig?: ExperimentConfig;
    networkConfig?: NetworkConfig;
    processingInputs?: ProcessingInput[];
    processingJobName: string;
    processingOutputConfig?: ProcessingOutputConfig;
    processingResources: ProcessingResources;
    roleArn: string;
    stoppingCondition?: ProcessingStoppingCondition;
    tags?: Tag[];
}
