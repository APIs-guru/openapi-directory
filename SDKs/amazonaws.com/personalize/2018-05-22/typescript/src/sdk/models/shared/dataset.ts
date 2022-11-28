import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Dataset
/** 
 * Provides metadata for a dataset.
**/
export class Dataset extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=datasetArn" })
  datasetArn?: string;

  @SpeakeasyMetadata({ data: "json, name=datasetGroupArn" })
  datasetGroupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=datasetType" })
  datasetType?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=schemaArn" })
  schemaArn?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
