import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DatasetSummary
/** 
 * Provides a summary of the properties of a dataset. For a complete listing, call the <a>DescribeDataset</a> API.
**/
export class DatasetSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @Metadata({ data: "json, name=datasetArn" })
  datasetArn?: string;

  @Metadata({ data: "json, name=datasetType" })
  datasetType?: string;

  @Metadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
