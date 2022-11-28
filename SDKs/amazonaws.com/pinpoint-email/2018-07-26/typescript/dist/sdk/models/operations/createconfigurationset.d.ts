import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateConfigurationSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Used to associate a configuration set with a dedicated IP pool.
**/
export declare class CreateConfigurationSetRequestBodyDeliveryOptions extends SpeakeasyBase {
    sendingPoolName?: string;
    tlsPolicy?: shared.TlsPolicyEnum;
}
/**
 * Enable or disable collection of reputation metrics for emails that you send using this configuration set in the current AWS Region.
**/
export declare class CreateConfigurationSetRequestBodyReputationOptions extends SpeakeasyBase {
    lastFreshStart?: Date;
    reputationMetricsEnabled?: boolean;
}
/**
 * Used to enable or disable email sending for messages that use this configuration set in the current AWS Region.
**/
export declare class CreateConfigurationSetRequestBodySendingOptions extends SpeakeasyBase {
    sendingEnabled?: boolean;
}
/**
 * <p>An object that defines the tracking options for a configuration set. When you use Amazon Pinpoint to send an email, it contains an invisible image that's used to track when recipients open your email. If your email contains links, those links are changed slightly in order to track when recipients click them.</p> <p>These images and links include references to a domain operated by AWS. You can optionally configure Amazon Pinpoint to use a domain that you operate for these images and links.</p>
**/
export declare class CreateConfigurationSetRequestBodyTrackingOptions extends SpeakeasyBase {
    customRedirectDomain?: string;
}
export declare class CreateConfigurationSetRequestBody extends SpeakeasyBase {
    configurationSetName: string;
    deliveryOptions?: CreateConfigurationSetRequestBodyDeliveryOptions;
    reputationOptions?: CreateConfigurationSetRequestBodyReputationOptions;
    sendingOptions?: CreateConfigurationSetRequestBodySendingOptions;
    tags?: shared.Tag[];
    trackingOptions?: CreateConfigurationSetRequestBodyTrackingOptions;
}
export declare class CreateConfigurationSetRequest extends SpeakeasyBase {
    headers: CreateConfigurationSetHeaders;
    request: CreateConfigurationSetRequestBody;
}
export declare class CreateConfigurationSetResponse extends SpeakeasyBase {
    alreadyExistsException?: any;
    badRequestException?: any;
    concurrentModificationException?: any;
    contentType: string;
    createConfigurationSetResponse?: Map<string, any>;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
