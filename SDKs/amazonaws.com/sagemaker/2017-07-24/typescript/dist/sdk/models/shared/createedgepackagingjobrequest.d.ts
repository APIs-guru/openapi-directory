import { SpeakeasyBase } from "../../../internal/utils";
import { EdgeOutputConfig } from "./edgeoutputconfig";
import { Tag } from "./tag";
export declare class CreateEdgePackagingJobRequest extends SpeakeasyBase {
    compilationJobName: string;
    edgePackagingJobName: string;
    modelName: string;
    modelVersion: string;
    outputConfig: EdgeOutputConfig;
    resourceKey?: string;
    roleArn: string;
    tags?: Tag[];
}
