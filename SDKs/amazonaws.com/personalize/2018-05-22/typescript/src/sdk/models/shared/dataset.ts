import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Dataset
/** 
 * Provides metadata for a dataset.
**/
export class Dataset extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @Metadata({ data: "json, name=datasetArn" })
  datasetArn?: string;

  @Metadata({ data: "json, name=datasetGroupArn" })
  datasetGroupArn?: string;

  @Metadata({ data: "json, name=datasetType" })
  datasetType?: string;

  @Metadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=schemaArn" })
  schemaArn?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
