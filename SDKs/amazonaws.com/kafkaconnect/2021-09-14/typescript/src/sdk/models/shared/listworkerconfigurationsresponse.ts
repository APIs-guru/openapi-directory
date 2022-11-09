import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WorkerConfigurationSummary } from "./workerconfigurationsummary";


export class ListWorkerConfigurationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=workerConfigurations", elemType: shared.WorkerConfigurationSummary })
  workerConfigurations?: WorkerConfigurationSummary[];
}
