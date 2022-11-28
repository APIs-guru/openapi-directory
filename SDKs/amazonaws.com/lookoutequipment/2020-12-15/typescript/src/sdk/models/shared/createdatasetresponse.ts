import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatasetStatusEnum } from "./datasetstatusenum";



export class CreateDatasetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DatasetArn" })
  datasetArn?: string;

  @SpeakeasyMetadata({ data: "json, name=DatasetName" })
  datasetName?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: DatasetStatusEnum;
}
