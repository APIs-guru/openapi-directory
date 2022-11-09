import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IngestionModeEnum } from "./ingestionmodeenum";
import { DatasetExportJobOutput } from "./datasetexportjoboutput";


// DatasetExportJob
/** 
 * <p>Describes a job that exports a dataset to an Amazon S3 bucket. For more information, see <a>CreateDatasetExportJob</a>.</p> <p>A dataset export job can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul>
**/
export class DatasetExportJob extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @Metadata({ data: "json, name=datasetArn" })
  datasetArn?: string;

  @Metadata({ data: "json, name=datasetExportJobArn" })
  datasetExportJobArn?: string;

  @Metadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=ingestionMode" })
  ingestionMode?: IngestionModeEnum;

  @Metadata({ data: "json, name=jobName" })
  jobName?: string;

  @Metadata({ data: "json, name=jobOutput" })
  jobOutput?: DatasetExportJobOutput;

  @Metadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
