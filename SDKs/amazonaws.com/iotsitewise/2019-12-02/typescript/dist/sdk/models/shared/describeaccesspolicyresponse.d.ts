import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Identity } from "./identity";
import { PermissionEnum } from "./permissionenum";
import { Resource } from "./resource";
export declare class DescribeAccessPolicyResponse extends SpeakeasyBase {
    accessPolicyArn: string;
    accessPolicyCreationDate: Date;
    accessPolicyId: string;
    accessPolicyIdentity: Identity;
    accessPolicyLastUpdateDate: Date;
    accessPolicyPermission: PermissionEnum;
    accessPolicyResource: Resource;
}
