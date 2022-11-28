import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssociateDrtRoleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn: string;
}
