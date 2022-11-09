import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkerConfigurationRevisionDescription } from "./workerconfigurationrevisiondescription";


export class DescribeWorkerConfigurationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=latestRevision" })
  latestRevision?: WorkerConfigurationRevisionDescription;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=workerConfigurationArn" })
  workerConfigurationArn?: string;
}
