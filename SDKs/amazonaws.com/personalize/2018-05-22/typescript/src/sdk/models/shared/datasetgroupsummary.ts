import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DatasetGroupSummary
/** 
 * Provides a summary of the properties of a dataset group. For a complete listing, call the <a>DescribeDatasetGroup</a> API.
**/
export class DatasetGroupSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=datasetGroupArn" })
  datasetGroupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
