import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeDatasetImportJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datasetImportJobArn" })
  datasetImportJobArn: string;
}
