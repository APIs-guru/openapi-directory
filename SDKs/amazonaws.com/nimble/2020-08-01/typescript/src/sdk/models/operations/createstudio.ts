import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateStudioHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Client-Token" })
  xAmzClientToken?: string;

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


// CreateStudioRequestBodyStudioEncryptionConfiguration
/** 
 * Configuration of the encryption method that is used for the studio.
**/
export class CreateStudioRequestBodyStudioEncryptionConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keyArn" })
  keyArn?: string;

  @SpeakeasyMetadata({ data: "json, name=keyType" })
  keyType?: shared.StudioEncryptionConfigurationKeyTypeEnum;
}


export class CreateStudioRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adminRoleArn" })
  adminRoleArn: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName: string;

  @SpeakeasyMetadata({ data: "json, name=studioEncryptionConfiguration" })
  studioEncryptionConfiguration?: CreateStudioRequestBodyStudioEncryptionConfiguration;

  @SpeakeasyMetadata({ data: "json, name=studioName" })
  studioName: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=userRoleArn" })
  userRoleArn: string;
}


export class CreateStudioRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateStudioHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateStudioRequestBody;
}


export class CreateStudioResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createStudioResponse?: shared.CreateStudioResponse;

  @SpeakeasyMetadata()
  internalServerErrorException?: any;

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
