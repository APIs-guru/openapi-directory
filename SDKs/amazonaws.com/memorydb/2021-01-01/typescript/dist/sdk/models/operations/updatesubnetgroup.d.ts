import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateSubnetGroupXAmzTargetEnum {
    AmazonMemoryDbUpdateSubnetGroup = "AmazonMemoryDB.UpdateSubnetGroup"
}
export declare class UpdateSubnetGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateSubnetGroupXAmzTargetEnum;
}
export declare class UpdateSubnetGroupRequest extends SpeakeasyBase {
    headers: UpdateSubnetGroupHeaders;
    request: shared.UpdateSubnetGroupRequest;
}
export declare class UpdateSubnetGroupResponse extends SpeakeasyBase {
    contentType: string;
    invalidSubnet?: any;
    serviceLinkedRoleNotFoundFault?: any;
    statusCode: number;
    subnetGroupNotFoundFault?: any;
    subnetInUse?: any;
    subnetNotAllowedFault?: any;
    subnetQuotaExceededFault?: any;
    updateSubnetGroupResponse?: shared.UpdateSubnetGroupResponse;
}
