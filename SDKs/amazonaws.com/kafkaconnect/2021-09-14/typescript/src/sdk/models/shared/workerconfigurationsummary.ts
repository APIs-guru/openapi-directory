import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkerConfigurationRevisionSummary } from "./workerconfigurationrevisionsummary";



// WorkerConfigurationSummary
/** 
 * The summary of a worker configuration.
**/
export class WorkerConfigurationSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=latestRevision" })
  latestRevision?: WorkerConfigurationRevisionSummary;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=workerConfigurationArn" })
  workerConfigurationArn?: string;
}
