import { SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkerConfigurationRevisionSummary } from "./workerconfigurationrevisionsummary";
/**
 * The summary of a worker configuration.
**/
export declare class WorkerConfigurationSummary extends SpeakeasyBase {
    creationTime?: Date;
    description?: string;
    latestRevision?: WorkerConfigurationRevisionSummary;
    name?: string;
    workerConfigurationArn?: string;
}
