import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeDatasetExportJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datasetExportJobArn" })
  datasetExportJobArn: string;
}
