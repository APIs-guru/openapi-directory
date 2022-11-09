import { SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkerConfigurationRevisionSummary } from "./workerconfigurationrevisionsummary";
export declare class CreateWorkerConfigurationResponse extends SpeakeasyBase {
    creationTime?: Date;
    latestRevision?: WorkerConfigurationRevisionSummary;
    name?: string;
    workerConfigurationArn?: string;
}
