import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AssociateDrtRoleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=RoleArn" })
  roleArn: string;
}
