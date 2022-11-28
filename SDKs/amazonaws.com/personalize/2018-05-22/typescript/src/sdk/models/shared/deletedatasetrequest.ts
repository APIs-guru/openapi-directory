import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteDatasetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datasetArn" })
  datasetArn: string;
}
