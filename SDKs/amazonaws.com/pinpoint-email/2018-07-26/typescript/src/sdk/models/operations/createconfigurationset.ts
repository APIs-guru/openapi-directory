import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateConfigurationSetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// CreateConfigurationSetRequestBodyDeliveryOptions
/** 
 * Used to associate a configuration set with a dedicated IP pool.
**/
export class CreateConfigurationSetRequestBodyDeliveryOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SendingPoolName" })
  sendingPoolName?: string;

  @SpeakeasyMetadata({ data: "json, name=TlsPolicy" })
  tlsPolicy?: shared.TlsPolicyEnum;
}


// CreateConfigurationSetRequestBodyReputationOptions
/** 
 * Enable or disable collection of reputation metrics for emails that you send using this configuration set in the current AWS Region. 
**/
export class CreateConfigurationSetRequestBodyReputationOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LastFreshStart" })
  lastFreshStart?: Date;

  @SpeakeasyMetadata({ data: "json, name=ReputationMetricsEnabled" })
  reputationMetricsEnabled?: boolean;
}


// CreateConfigurationSetRequestBodySendingOptions
/** 
 * Used to enable or disable email sending for messages that use this configuration set in the current AWS Region.
**/
export class CreateConfigurationSetRequestBodySendingOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SendingEnabled" })
  sendingEnabled?: boolean;
}


// CreateConfigurationSetRequestBodyTrackingOptions
/** 
 * <p>An object that defines the tracking options for a configuration set. When you use Amazon Pinpoint to send an email, it contains an invisible image that's used to track when recipients open your email. If your email contains links, those links are changed slightly in order to track when recipients click them.</p> <p>These images and links include references to a domain operated by AWS. You can optionally configure Amazon Pinpoint to use a domain that you operate for these images and links.</p>
**/
export class CreateConfigurationSetRequestBodyTrackingOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CustomRedirectDomain" })
  customRedirectDomain?: string;
}


export class CreateConfigurationSetRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigurationSetName" })
  configurationSetName: string;

  @SpeakeasyMetadata({ data: "json, name=DeliveryOptions" })
  deliveryOptions?: CreateConfigurationSetRequestBodyDeliveryOptions;

  @SpeakeasyMetadata({ data: "json, name=ReputationOptions" })
  reputationOptions?: CreateConfigurationSetRequestBodyReputationOptions;

  @SpeakeasyMetadata({ data: "json, name=SendingOptions" })
  sendingOptions?: CreateConfigurationSetRequestBodySendingOptions;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: shared.Tag[];

  @SpeakeasyMetadata({ data: "json, name=TrackingOptions" })
  trackingOptions?: CreateConfigurationSetRequestBodyTrackingOptions;
}


export class CreateConfigurationSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateConfigurationSetHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateConfigurationSetRequestBody;
}


export class CreateConfigurationSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  alreadyExistsException?: any;

  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  concurrentModificationException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createConfigurationSetResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
