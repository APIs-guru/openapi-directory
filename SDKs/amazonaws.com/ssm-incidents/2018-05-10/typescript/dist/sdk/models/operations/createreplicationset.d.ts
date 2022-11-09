import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateReplicationSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateReplicationSetRequestBody extends SpeakeasyBase {
    clientToken?: string;
    regions: Map<string, shared.RegionMapInputValue>;
}
export declare class CreateReplicationSetRequest extends SpeakeasyBase {
    headers: CreateReplicationSetHeaders;
    request: CreateReplicationSetRequestBody;
}
export declare class CreateReplicationSetResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createReplicationSetOutput?: shared.CreateReplicationSetOutput;
    internalServerException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
