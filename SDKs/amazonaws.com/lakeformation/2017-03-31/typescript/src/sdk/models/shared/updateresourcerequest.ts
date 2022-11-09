import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateResourceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceArn" })
  resourceArn: string;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn: string;
}
