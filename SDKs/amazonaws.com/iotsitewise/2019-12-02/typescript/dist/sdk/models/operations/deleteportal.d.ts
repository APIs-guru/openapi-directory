import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeletePortalPathParams extends SpeakeasyBase {
    portalId: string;
}
export declare class DeletePortalQueryParams extends SpeakeasyBase {
    clientToken?: string;
}
export declare class DeletePortalHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeletePortalRequest extends SpeakeasyBase {
    pathParams: DeletePortalPathParams;
    queryParams: DeletePortalQueryParams;
    headers: DeletePortalHeaders;
}
export declare class DeletePortalResponse extends SpeakeasyBase {
    conflictingOperationException?: any;
    contentType: string;
    deletePortalResponse?: shared.DeletePortalResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
