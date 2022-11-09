import { SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkerConfigurationSummary } from "./workerconfigurationsummary";
export declare class ListWorkerConfigurationsResponse extends SpeakeasyBase {
    nextToken?: string;
    workerConfigurations?: WorkerConfigurationSummary[];
}
