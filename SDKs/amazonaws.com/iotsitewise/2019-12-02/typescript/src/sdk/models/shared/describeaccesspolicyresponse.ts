import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Identity } from "./identity";
import { PermissionEnum } from "./permissionenum";
import { Resource } from "./resource";



export class DescribeAccessPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessPolicyArn" })
  accessPolicyArn: string;

  @SpeakeasyMetadata({ data: "json, name=accessPolicyCreationDate" })
  accessPolicyCreationDate: Date;

  @SpeakeasyMetadata({ data: "json, name=accessPolicyId" })
  accessPolicyId: string;

  @SpeakeasyMetadata({ data: "json, name=accessPolicyIdentity" })
  accessPolicyIdentity: Identity;

  @SpeakeasyMetadata({ data: "json, name=accessPolicyLastUpdateDate" })
  accessPolicyLastUpdateDate: Date;

  @SpeakeasyMetadata({ data: "json, name=accessPolicyPermission" })
  accessPolicyPermission: PermissionEnum;

  @SpeakeasyMetadata({ data: "json, name=accessPolicyResource" })
  accessPolicyResource: Resource;
}
