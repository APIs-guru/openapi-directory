import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFindingsPublicationConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetFindingsPublicationConfigurationRequest extends SpeakeasyBase {
    headers: GetFindingsPublicationConfigurationHeaders;
}
export declare class GetFindingsPublicationConfigurationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    getFindingsPublicationConfigurationResponse?: shared.GetFindingsPublicationConfigurationResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
