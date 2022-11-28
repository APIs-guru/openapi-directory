import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IngestionModeEnum } from "./ingestionmodeenum";
import { DatasetExportJobOutput } from "./datasetexportjoboutput";



// DatasetExportJob
/** 
 * <p>Describes a job that exports a dataset to an Amazon S3 bucket. For more information, see <a>CreateDatasetExportJob</a>.</p> <p>A dataset export job can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul>
**/
export class DatasetExportJob extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=datasetArn" })
  datasetArn?: string;

  @SpeakeasyMetadata({ data: "json, name=datasetExportJobArn" })
  datasetExportJobArn?: string;

  @SpeakeasyMetadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=ingestionMode" })
  ingestionMode?: IngestionModeEnum;

  @SpeakeasyMetadata({ data: "json, name=jobName" })
  jobName?: string;

  @SpeakeasyMetadata({ data: "json, name=jobOutput" })
  jobOutput?: DatasetExportJobOutput;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
