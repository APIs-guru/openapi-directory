import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateDatasetGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=datasetGroupArn" })
  datasetGroupArn?: string;
}
