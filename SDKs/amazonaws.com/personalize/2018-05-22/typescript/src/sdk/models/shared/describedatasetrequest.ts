import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeDatasetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=datasetArn" })
  datasetArn: string;
}
