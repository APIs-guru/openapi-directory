import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveAttributesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application-id" })
  applicationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=attribute-type" })
  attributeType: string;
}


export class RemoveAttributesHeaders extends SpeakeasyBase {
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


// RemoveAttributesRequestBodyUpdateAttributesRequest
/** 
 * Specifies one or more attributes to remove from all the endpoints that are associated with an application.
**/
export class RemoveAttributesRequestBodyUpdateAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Blacklist" })
  blacklist?: string[];
}


export class RemoveAttributesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UpdateAttributesRequest" })
  updateAttributesRequest: RemoveAttributesRequestBodyUpdateAttributesRequest;
}


export class RemoveAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveAttributesPathParams;

  @SpeakeasyMetadata()
  headers: RemoveAttributesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: RemoveAttributesRequestBody;
}


export class RemoveAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  forbiddenException?: any;

  @SpeakeasyMetadata()
  internalServerErrorException?: any;

  @SpeakeasyMetadata()
  methodNotAllowedException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  payloadTooLargeException?: any;

  @SpeakeasyMetadata()
  removeAttributesResponse?: shared.RemoveAttributesResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
