import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegisterResourceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceArn" })
  resourceArn: string;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=UseServiceLinkedRole" })
  useServiceLinkedRole?: boolean;
}
