import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateWorldTemplateHeaders extends SpeakeasyBase {
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


// UpdateWorldTemplateRequestBodyTemplateLocation
/** 
 * Information about a template location.
**/
export class UpdateWorldTemplateRequestBodyTemplateLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=s3Bucket" })
  s3Bucket?: string;

  @SpeakeasyMetadata({ data: "json, name=s3Key" })
  s3Key?: string;
}


export class UpdateWorldTemplateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=template" })
  template: string;

  @SpeakeasyMetadata({ data: "json, name=templateBody" })
  templateBody?: string;

  @SpeakeasyMetadata({ data: "json, name=templateLocation" })
  templateLocation?: UpdateWorldTemplateRequestBodyTemplateLocation;
}


export class UpdateWorldTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateWorldTemplateHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateWorldTemplateRequestBody;
}


export class UpdateWorldTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  updateWorldTemplateResponse?: shared.UpdateWorldTemplateResponse;
}
