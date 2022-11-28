import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetAssociatedResourceResourceTypeEnum {
    CfnStack = "CFN_STACK"
}
export declare class GetAssociatedResourcePathParams extends SpeakeasyBase {
    application: string;
    resource: string;
    resourceType: GetAssociatedResourceResourceTypeEnum;
}
export declare class GetAssociatedResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAssociatedResourceRequest extends SpeakeasyBase {
    pathParams: GetAssociatedResourcePathParams;
    headers: GetAssociatedResourceHeaders;
}
export declare class GetAssociatedResourceResponse extends SpeakeasyBase {
    contentType: string;
    getAssociatedResourceResponse?: shared.GetAssociatedResourceResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
