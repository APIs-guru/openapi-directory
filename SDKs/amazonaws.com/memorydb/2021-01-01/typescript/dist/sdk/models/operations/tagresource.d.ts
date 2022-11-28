import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum TagResourceXAmzTargetEnum {
    AmazonMemoryDbTagResource = "AmazonMemoryDB.TagResource"
}
export declare class TagResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TagResourceXAmzTargetEnum;
}
export declare class TagResourceRequest extends SpeakeasyBase {
    headers: TagResourceHeaders;
    request: shared.TagResourceRequest;
}
export declare class TagResourceResponse extends SpeakeasyBase {
    aclNotFoundFault?: any;
    clusterNotFoundFault?: any;
    contentType: string;
    invalidArnFault?: any;
    invalidClusterStateFault?: any;
    parameterGroupNotFoundFault?: any;
    serviceLinkedRoleNotFoundFault?: any;
    snapshotNotFoundFault?: any;
    statusCode: number;
    subnetGroupNotFoundFault?: any;
    tagQuotaPerResourceExceeded?: any;
    tagResourceResponse?: shared.TagResourceResponse;
    userNotFoundFault?: any;
}
