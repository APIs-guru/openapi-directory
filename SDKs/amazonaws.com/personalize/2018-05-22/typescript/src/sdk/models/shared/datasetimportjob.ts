import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataSource } from "./datasource";


// DatasetImportJob
/** 
 * <p>Describes a job that imports training data from a data source (Amazon S3 bucket) to an Amazon Personalize dataset. For more information, see <a>CreateDatasetImportJob</a>.</p> <p>A dataset import job can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul>
**/
export class DatasetImportJob extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @Metadata({ data: "json, name=dataSource" })
  dataSource?: DataSource;

  @Metadata({ data: "json, name=datasetArn" })
  datasetArn?: string;

  @Metadata({ data: "json, name=datasetImportJobArn" })
  datasetImportJobArn?: string;

  @Metadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=jobName" })
  jobName?: string;

  @Metadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
