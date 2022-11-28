import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DatasetExportJobSummary
/** 
 * Provides a summary of the properties of a dataset export job. For a complete listing, call the <a>DescribeDatasetExportJob</a> API.
**/
export class DatasetExportJobSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=datasetExportJobArn" })
  datasetExportJobArn?: string;

  @SpeakeasyMetadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=jobName" })
  jobName?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
