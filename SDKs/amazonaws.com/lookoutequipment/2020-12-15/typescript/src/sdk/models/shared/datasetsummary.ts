import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatasetStatusEnum } from "./datasetstatusenum";



// DatasetSummary
/** 
 * Contains information about the specific data set, including name, ARN, and status. 
**/
export class DatasetSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=DatasetArn" })
  datasetArn?: string;

  @SpeakeasyMetadata({ data: "json, name=DatasetName" })
  datasetName?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: DatasetStatusEnum;
}
