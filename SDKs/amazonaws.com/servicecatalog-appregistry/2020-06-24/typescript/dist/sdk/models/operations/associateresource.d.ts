import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum AssociateResourceResourceTypeEnum {
    CfnStack = "CFN_STACK"
}
export declare class AssociateResourcePathParams extends SpeakeasyBase {
    application: string;
    resource: string;
    resourceType: AssociateResourceResourceTypeEnum;
}
export declare class AssociateResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AssociateResourceRequest extends SpeakeasyBase {
    pathParams: AssociateResourcePathParams;
    headers: AssociateResourceHeaders;
}
export declare class AssociateResourceResponse extends SpeakeasyBase {
    associateResourceResponse?: shared.AssociateResourceResponse;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
}
