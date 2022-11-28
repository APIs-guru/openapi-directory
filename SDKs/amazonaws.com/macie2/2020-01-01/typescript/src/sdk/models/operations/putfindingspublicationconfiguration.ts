import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutFindingsPublicationConfigurationHeaders extends SpeakeasyBase {
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


// PutFindingsPublicationConfigurationRequestBodySecurityHubConfiguration
/** 
 * Specifies configuration settings that determine which findings are published to Security Hub automatically. For information about how Macie publishes findings to Security Hub, see <a href="https://docs.aws.amazon.com/macie/latest/user/securityhub-integration.html">Amazon Macie integration with Security Hub</a> in the <i>Amazon Macie User Guide</i>.
**/
export class PutFindingsPublicationConfigurationRequestBodySecurityHubConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=publishClassificationFindings" })
  publishClassificationFindings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=publishPolicyFindings" })
  publishPolicyFindings?: boolean;
}


export class PutFindingsPublicationConfigurationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=securityHubConfiguration" })
  securityHubConfiguration?: PutFindingsPublicationConfigurationRequestBodySecurityHubConfiguration;
}


export class PutFindingsPublicationConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PutFindingsPublicationConfigurationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutFindingsPublicationConfigurationRequestBody;
}


export class PutFindingsPublicationConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  putFindingsPublicationConfigurationResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceQuotaExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
