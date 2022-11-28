import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceArn" })
  resourceArn: string;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn: string;
}
