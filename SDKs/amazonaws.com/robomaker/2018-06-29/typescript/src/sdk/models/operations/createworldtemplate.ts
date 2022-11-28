import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateWorldTemplateHeaders extends SpeakeasyBase {
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


// CreateWorldTemplateRequestBodyTemplateLocation
/** 
 * Information about a template location.
**/
export class CreateWorldTemplateRequestBodyTemplateLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=s3Bucket" })
  s3Bucket?: string;

  @SpeakeasyMetadata({ data: "json, name=s3Key" })
  s3Key?: string;
}


export class CreateWorldTemplateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=templateBody" })
  templateBody?: string;

  @SpeakeasyMetadata({ data: "json, name=templateLocation" })
  templateLocation?: CreateWorldTemplateRequestBodyTemplateLocation;
}


export class CreateWorldTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateWorldTemplateHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateWorldTemplateRequestBody;
}


export class CreateWorldTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createWorldTemplateResponse?: shared.CreateWorldTemplateResponse;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  resourceAlreadyExistsException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
