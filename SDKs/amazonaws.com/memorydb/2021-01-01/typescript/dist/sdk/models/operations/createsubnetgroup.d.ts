import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateSubnetGroupXAmzTargetEnum {
    AmazonMemoryDbCreateSubnetGroup = "AmazonMemoryDB.CreateSubnetGroup"
}
export declare class CreateSubnetGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateSubnetGroupXAmzTargetEnum;
}
export declare class CreateSubnetGroupRequest extends SpeakeasyBase {
    headers: CreateSubnetGroupHeaders;
    request: shared.CreateSubnetGroupRequest;
}
export declare class CreateSubnetGroupResponse extends SpeakeasyBase {
    contentType: string;
    createSubnetGroupResponse?: shared.CreateSubnetGroupResponse;
    invalidSubnet?: any;
    serviceLinkedRoleNotFoundFault?: any;
    statusCode: number;
    subnetGroupAlreadyExistsFault?: any;
    subnetGroupQuotaExceededFault?: any;
    subnetNotAllowedFault?: any;
    subnetQuotaExceededFault?: any;
    tagQuotaPerResourceExceeded?: any;
}
