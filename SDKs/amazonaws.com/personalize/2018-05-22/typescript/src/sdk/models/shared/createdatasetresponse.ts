import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateDatasetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=datasetArn" })
  datasetArn?: string;
}
