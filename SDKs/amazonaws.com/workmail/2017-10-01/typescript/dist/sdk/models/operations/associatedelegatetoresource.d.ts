import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum AssociateDelegateToResourceXAmzTargetEnum {
    WorkMailServiceAssociateDelegateToResource = "WorkMailService.AssociateDelegateToResource"
}
export declare class AssociateDelegateToResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateDelegateToResourceXAmzTargetEnum;
}
export declare class AssociateDelegateToResourceRequest extends SpeakeasyBase {
    headers: AssociateDelegateToResourceHeaders;
    request: shared.AssociateDelegateToResourceRequest;
}
export declare class AssociateDelegateToResourceResponse extends SpeakeasyBase {
    associateDelegateToResourceResponse?: Map<string, any>;
    contentType: string;
    entityNotFoundException?: any;
    entityStateException?: any;
    invalidParameterException?: any;
    organizationNotFoundException?: any;
    organizationStateException?: any;
    statusCode: number;
}
