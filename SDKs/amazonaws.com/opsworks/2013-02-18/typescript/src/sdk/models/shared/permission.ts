import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Permission
/** 
 * Describes stack or user permissions.
**/
export class Permission extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllowSsh" })
  allowSsh?: boolean;

  @SpeakeasyMetadata({ data: "json, name=AllowSudo" })
  allowSudo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IamUserArn" })
  iamUserArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Level" })
  level?: string;

  @SpeakeasyMetadata({ data: "json, name=StackId" })
  stackId?: string;
}
