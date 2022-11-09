import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DatasetStatusEnum } from "./datasetstatusenum";


export class CreateDatasetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DatasetArn" })
  datasetArn?: string;

  @Metadata({ data: "json, name=DatasetName" })
  datasetName?: string;

  @Metadata({ data: "json, name=Status" })
  status?: DatasetStatusEnum;
}
