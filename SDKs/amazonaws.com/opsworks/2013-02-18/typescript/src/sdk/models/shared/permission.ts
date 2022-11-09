import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Permission
/** 
 * Describes stack or user permissions.
**/
export class Permission extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllowSsh" })
  allowSsh?: boolean;

  @Metadata({ data: "json, name=AllowSudo" })
  allowSudo?: boolean;

  @Metadata({ data: "json, name=IamUserArn" })
  iamUserArn?: string;

  @Metadata({ data: "json, name=Level" })
  level?: string;

  @Metadata({ data: "json, name=StackId" })
  stackId?: string;
}
