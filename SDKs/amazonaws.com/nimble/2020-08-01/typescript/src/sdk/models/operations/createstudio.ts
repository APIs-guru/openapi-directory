import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateStudioHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Client-Token" })
  xAmzClientToken?: string;

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


// CreateStudioRequestBodyStudioEncryptionConfiguration
/** 
 * Configuration of the encryption method that is used for the studio.
**/
export class CreateStudioRequestBodyStudioEncryptionConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=keyArn" })
  keyArn?: string;

  @Metadata({ data: "json, name=keyType" })
  keyType?: shared.StudioEncryptionConfigurationKeyTypeEnum;
}


export class CreateStudioRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=adminRoleArn" })
  adminRoleArn: string;

  @Metadata({ data: "json, name=displayName" })
  displayName: string;

  @Metadata({ data: "json, name=studioEncryptionConfiguration" })
  studioEncryptionConfiguration?: CreateStudioRequestBodyStudioEncryptionConfiguration;

  @Metadata({ data: "json, name=studioName" })
  studioName: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=userRoleArn" })
  userRoleArn: string;
}


export class CreateStudioRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateStudioHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateStudioRequestBody;
}


export class CreateStudioResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createStudioResponse?: shared.CreateStudioResponse;

  @Metadata()
  internalServerErrorException?: any;

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
