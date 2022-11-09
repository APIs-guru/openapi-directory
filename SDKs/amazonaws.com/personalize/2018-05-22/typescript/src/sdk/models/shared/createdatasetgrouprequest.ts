import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateDatasetGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=kmsKeyArn" })
  kmsKeyArn?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;
}
