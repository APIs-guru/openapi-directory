import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutClassificationExportConfigurationHeaders extends SpeakeasyBase {
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


// PutClassificationExportConfigurationRequestBodyConfiguration
/** 
 * Specifies where to store data classification results, and the encryption settings to use when storing results in that location. Currently, you can store classification results only in an S3 bucket.
**/
export class PutClassificationExportConfigurationRequestBodyConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=s3Destination" })
  s3Destination?: shared.S3Destination;
}


export class PutClassificationExportConfigurationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=configuration" })
  configuration: PutClassificationExportConfigurationRequestBodyConfiguration;
}


export class PutClassificationExportConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutClassificationExportConfigurationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutClassificationExportConfigurationRequestBody;
}


export class PutClassificationExportConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  putClassificationExportConfigurationResponse?: shared.PutClassificationExportConfigurationResponse;

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
