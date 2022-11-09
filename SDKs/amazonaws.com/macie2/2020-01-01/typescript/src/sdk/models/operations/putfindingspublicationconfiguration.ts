import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutFindingsPublicationConfigurationHeaders extends SpeakeasyBase {
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


// PutFindingsPublicationConfigurationRequestBodySecurityHubConfiguration
/** 
 * Specifies configuration settings that determine which findings are published to Security Hub automatically. For information about how Macie publishes findings to Security Hub, see <a href="https://docs.aws.amazon.com/macie/latest/user/securityhub-integration.html">Amazon Macie integration with Security Hub</a> in the <i>Amazon Macie User Guide</i>.
**/
export class PutFindingsPublicationConfigurationRequestBodySecurityHubConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=publishClassificationFindings" })
  publishClassificationFindings?: boolean;

  @Metadata({ data: "json, name=publishPolicyFindings" })
  publishPolicyFindings?: boolean;
}


export class PutFindingsPublicationConfigurationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=securityHubConfiguration" })
  securityHubConfiguration?: PutFindingsPublicationConfigurationRequestBodySecurityHubConfiguration;
}


export class PutFindingsPublicationConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutFindingsPublicationConfigurationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutFindingsPublicationConfigurationRequestBody;
}


export class PutFindingsPublicationConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  putFindingsPublicationConfigurationResponse?: Map<string, any>;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
