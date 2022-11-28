import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkerConfigurationRevisionDescription } from "./workerconfigurationrevisiondescription";



export class DescribeWorkerConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=latestRevision" })
  latestRevision?: WorkerConfigurationRevisionDescription;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=workerConfigurationArn" })
  workerConfigurationArn?: string;
}
