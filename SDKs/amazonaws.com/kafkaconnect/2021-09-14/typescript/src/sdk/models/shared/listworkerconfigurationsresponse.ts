import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkerConfigurationSummary } from "./workerconfigurationsummary";



export class ListWorkerConfigurationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=workerConfigurations", elemType: WorkerConfigurationSummary })
  workerConfigurations?: WorkerConfigurationSummary[];
}
