import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Identity } from "./identity";
import { PermissionEnum } from "./permissionenum";
import { Resource } from "./resource";


export class DescribeAccessPolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessPolicyArn" })
  accessPolicyArn: string;

  @Metadata({ data: "json, name=accessPolicyCreationDate" })
  accessPolicyCreationDate: Date;

  @Metadata({ data: "json, name=accessPolicyId" })
  accessPolicyId: string;

  @Metadata({ data: "json, name=accessPolicyIdentity" })
  accessPolicyIdentity: Identity;

  @Metadata({ data: "json, name=accessPolicyLastUpdateDate" })
  accessPolicyLastUpdateDate: Date;

  @Metadata({ data: "json, name=accessPolicyPermission" })
  accessPolicyPermission: PermissionEnum;

  @Metadata({ data: "json, name=accessPolicyResource" })
  accessPolicyResource: Resource;
}
