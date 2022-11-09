import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DatasetImportJobSummary
/** 
 * Provides a summary of the properties of a dataset import job. For a complete listing, call the <a>DescribeDatasetImportJob</a> API.
**/
export class DatasetImportJobSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @Metadata({ data: "json, name=datasetImportJobArn" })
  datasetImportJobArn?: string;

  @Metadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=jobName" })
  jobName?: string;

  @Metadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
