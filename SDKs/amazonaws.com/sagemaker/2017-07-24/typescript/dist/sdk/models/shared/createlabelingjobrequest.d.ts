import { SpeakeasyBase } from "../../../internal/utils";
import { HumanTaskConfig } from "./humantaskconfig";
import { LabelingJobInputConfig } from "./labelingjobinputconfig";
import { LabelingJobAlgorithmsConfig } from "./labelingjobalgorithmsconfig";
import { LabelingJobOutputConfig } from "./labelingjoboutputconfig";
import { LabelingJobStoppingConditions } from "./labelingjobstoppingconditions";
import { Tag } from "./tag";
export declare class CreateLabelingJobRequest extends SpeakeasyBase {
    humanTaskConfig: HumanTaskConfig;
    inputConfig: LabelingJobInputConfig;
    labelAttributeName: string;
    labelCategoryConfigS3Uri?: string;
    labelingJobAlgorithmsConfig?: LabelingJobAlgorithmsConfig;
    labelingJobName: string;
    outputConfig: LabelingJobOutputConfig;
    roleArn: string;
    stoppingConditions?: LabelingJobStoppingConditions;
    tags?: Tag[];
}
