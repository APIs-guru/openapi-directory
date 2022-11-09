import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DataSource } from "./datasource";
/**
 * <p>Describes a job that imports training data from a data source (Amazon S3 bucket) to an Amazon Personalize dataset. For more information, see <a>CreateDatasetImportJob</a>.</p> <p>A dataset import job can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul>
**/
export declare class DatasetImportJob extends SpeakeasyBase {
    creationDateTime?: Date;
    dataSource?: DataSource;
    datasetArn?: string;
    datasetImportJobArn?: string;
    failureReason?: string;
    jobName?: string;
    lastUpdatedDateTime?: Date;
    roleArn?: string;
    status?: string;
}
