import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeDatasetImportJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=datasetImportJobArn" })
  datasetImportJobArn: string;
}
