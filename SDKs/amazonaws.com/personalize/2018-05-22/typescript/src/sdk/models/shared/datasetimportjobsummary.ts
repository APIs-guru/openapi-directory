import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DatasetImportJobSummary
/** 
 * Provides a summary of the properties of a dataset import job. For a complete listing, call the <a>DescribeDatasetImportJob</a> API.
**/
export class DatasetImportJobSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=datasetImportJobArn" })
  datasetImportJobArn?: string;

  @SpeakeasyMetadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=jobName" })
  jobName?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
