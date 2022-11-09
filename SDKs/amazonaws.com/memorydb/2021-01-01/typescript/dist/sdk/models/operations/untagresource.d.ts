import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UntagResourceXAmzTargetEnum {
    AmazonMemoryDbUntagResource = "AmazonMemoryDB.UntagResource"
}
export declare class UntagResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UntagResourceXAmzTargetEnum;
}
export declare class UntagResourceRequest extends SpeakeasyBase {
    headers: UntagResourceHeaders;
    request: shared.UntagResourceRequest;
}
export declare class UntagResourceResponse extends SpeakeasyBase {
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
    tagNotFoundFault?: any;
    untagResourceResponse?: shared.UntagResourceResponse;
    userNotFoundFault?: any;
}
