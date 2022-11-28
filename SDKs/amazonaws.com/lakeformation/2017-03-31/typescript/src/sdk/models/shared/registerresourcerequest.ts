import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegisterResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceArn" })
  resourceArn: string;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=UseServiceLinkedRole" })
  useServiceLinkedRole?: boolean;
}
