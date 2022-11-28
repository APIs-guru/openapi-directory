import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateDatasetExportJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datasetExportJobArn" })
  datasetExportJobArn?: string;
}
