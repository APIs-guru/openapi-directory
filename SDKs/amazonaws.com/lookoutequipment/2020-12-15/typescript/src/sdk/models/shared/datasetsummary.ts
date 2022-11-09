import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DatasetStatusEnum } from "./datasetstatusenum";


// DatasetSummary
/** 
 * Contains information about the specific data set, including name, ARN, and status. 
**/
export class DatasetSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=DatasetArn" })
  datasetArn?: string;

  @Metadata({ data: "json, name=DatasetName" })
  datasetName?: string;

  @Metadata({ data: "json, name=Status" })
  status?: DatasetStatusEnum;
}
