import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateConfigurationSetHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// CreateConfigurationSetRequestBodyDeliveryOptions
/** 
 * Used to associate a configuration set with a dedicated IP pool.
**/
export class CreateConfigurationSetRequestBodyDeliveryOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=SendingPoolName" })
  sendingPoolName?: string;

  @Metadata({ data: "json, name=TlsPolicy" })
  tlsPolicy?: shared.TlsPolicyEnum;
}


// CreateConfigurationSetRequestBodyReputationOptions
/** 
 * Enable or disable collection of reputation metrics for emails that you send using this configuration set in the current AWS Region. 
**/
export class CreateConfigurationSetRequestBodyReputationOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=LastFreshStart" })
  lastFreshStart?: Date;

  @Metadata({ data: "json, name=ReputationMetricsEnabled" })
  reputationMetricsEnabled?: boolean;
}


// CreateConfigurationSetRequestBodySendingOptions
/** 
 * Used to enable or disable email sending for messages that use this configuration set in the current AWS Region.
**/
export class CreateConfigurationSetRequestBodySendingOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=SendingEnabled" })
  sendingEnabled?: boolean;
}


// CreateConfigurationSetRequestBodySuppressionOptions
/** 
 * An object that contains information about the suppression list preferences for your account.
**/
export class CreateConfigurationSetRequestBodySuppressionOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=SuppressedReasons" })
  suppressedReasons?: shared.SuppressionListReasonEnum[];
}


// CreateConfigurationSetRequestBodyTrackingOptions
/** 
 * <p>An object that defines the tracking options for a configuration set. When you use the Amazon SES API v2 to send an email, it contains an invisible image that's used to track when recipients open your email. If your email contains links, those links are changed slightly in order to track when recipients click them.</p> <p>These images and links include references to a domain operated by AWS. You can optionally configure the Amazon SES to use a domain that you operate for these images and links.</p>
**/
export class CreateConfigurationSetRequestBodyTrackingOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=CustomRedirectDomain" })
  customRedirectDomain?: string;
}


export class CreateConfigurationSetRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigurationSetName" })
  configurationSetName: string;

  @Metadata({ data: "json, name=DeliveryOptions" })
  deliveryOptions?: CreateConfigurationSetRequestBodyDeliveryOptions;

  @Metadata({ data: "json, name=ReputationOptions" })
  reputationOptions?: CreateConfigurationSetRequestBodyReputationOptions;

  @Metadata({ data: "json, name=SendingOptions" })
  sendingOptions?: CreateConfigurationSetRequestBodySendingOptions;

  @Metadata({ data: "json, name=SuppressionOptions" })
  suppressionOptions?: CreateConfigurationSetRequestBodySuppressionOptions;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: shared.Tag[];

  @Metadata({ data: "json, name=TrackingOptions" })
  trackingOptions?: CreateConfigurationSetRequestBodyTrackingOptions;
}


export class CreateConfigurationSetRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateConfigurationSetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateConfigurationSetRequestBody;
}


export class CreateConfigurationSetResponse extends SpeakeasyBase {
  @Metadata()
  alreadyExistsException?: any;

  @Metadata()
  badRequestException?: any;

  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createConfigurationSetResponse?: Map<string, any>;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
