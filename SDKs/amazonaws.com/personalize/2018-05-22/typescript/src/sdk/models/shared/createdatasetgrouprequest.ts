import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateDatasetGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kmsKeyArn" })
  kmsKeyArn?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn?: string;
}
