import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutStudioMembersPathParams extends SpeakeasyBase {
    studioId: string;
}
export declare class PutStudioMembersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzClientToken?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutStudioMembersRequestBody extends SpeakeasyBase {
    identityStoreId: string;
    members: shared.NewStudioMember[];
}
export declare class PutStudioMembersRequest extends SpeakeasyBase {
    pathParams: PutStudioMembersPathParams;
    headers: PutStudioMembersHeaders;
    request: PutStudioMembersRequestBody;
}
export declare class PutStudioMembersResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerErrorException?: any;
    putStudioMembersResponse?: Map<string, any>;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
