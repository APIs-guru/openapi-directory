import { SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkerConfigurationRevisionDescription } from "./workerconfigurationrevisiondescription";
export declare class DescribeWorkerConfigurationResponse extends SpeakeasyBase {
    creationTime?: Date;
    description?: string;
    latestRevision?: WorkerConfigurationRevisionDescription;
    name?: string;
    workerConfigurationArn?: string;
}
