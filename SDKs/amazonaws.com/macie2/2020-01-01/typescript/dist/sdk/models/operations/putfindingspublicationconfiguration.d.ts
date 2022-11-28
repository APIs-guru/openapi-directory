import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutFindingsPublicationConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies configuration settings that determine which findings are published to Security Hub automatically. For information about how Macie publishes findings to Security Hub, see <a href="https://docs.aws.amazon.com/macie/latest/user/securityhub-integration.html">Amazon Macie integration with Security Hub</a> in the <i>Amazon Macie User Guide</i>.
**/
export declare class PutFindingsPublicationConfigurationRequestBodySecurityHubConfiguration extends SpeakeasyBase {
    publishClassificationFindings?: boolean;
    publishPolicyFindings?: boolean;
}
export declare class PutFindingsPublicationConfigurationRequestBody extends SpeakeasyBase {
    clientToken?: string;
    securityHubConfiguration?: PutFindingsPublicationConfigurationRequestBodySecurityHubConfiguration;
}
export declare class PutFindingsPublicationConfigurationRequest extends SpeakeasyBase {
    headers: PutFindingsPublicationConfigurationHeaders;
    request: PutFindingsPublicationConfigurationRequestBody;
}
export declare class PutFindingsPublicationConfigurationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    putFindingsPublicationConfigurationResponse?: Map<string, any>;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
