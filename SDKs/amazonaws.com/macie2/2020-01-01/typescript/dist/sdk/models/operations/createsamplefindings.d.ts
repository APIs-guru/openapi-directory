import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateSampleFindingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateSampleFindingsRequestBody extends SpeakeasyBase {
    findingTypes?: shared.FindingTypeEnum[];
}
export declare class CreateSampleFindingsRequest extends SpeakeasyBase {
    headers: CreateSampleFindingsHeaders;
    request: CreateSampleFindingsRequestBody;
}
export declare class CreateSampleFindingsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createSampleFindingsResponse?: Map<string, any>;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
