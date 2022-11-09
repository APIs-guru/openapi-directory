import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkerConfigurationRevisionSummary } from "./workerconfigurationrevisionsummary";


// WorkerConfigurationSummary
/** 
 * The summary of a worker configuration.
**/
export class WorkerConfigurationSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=latestRevision" })
  latestRevision?: WorkerConfigurationRevisionSummary;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=workerConfigurationArn" })
  workerConfigurationArn?: string;
}
