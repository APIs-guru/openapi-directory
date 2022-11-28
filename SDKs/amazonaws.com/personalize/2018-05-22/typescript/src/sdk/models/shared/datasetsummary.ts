import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DatasetSummary
/** 
 * Provides a summary of the properties of a dataset. For a complete listing, call the <a>DescribeDataset</a> API.
**/
export class DatasetSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=datasetArn" })
  datasetArn?: string;

  @SpeakeasyMetadata({ data: "json, name=datasetType" })
  datasetType?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
