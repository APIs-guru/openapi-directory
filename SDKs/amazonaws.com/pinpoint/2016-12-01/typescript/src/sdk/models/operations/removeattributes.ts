import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RemoveAttributesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=application-id" })
  applicationId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=attribute-type" })
  attributeType: string;
}


export class RemoveAttributesHeaders extends SpeakeasyBase {
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


// RemoveAttributesRequestBodyUpdateAttributesRequest
/** 
 * Specifies one or more attributes to remove from all the endpoints that are associated with an application.
**/
export class RemoveAttributesRequestBodyUpdateAttributesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Blacklist" })
  blacklist?: string[];
}


export class RemoveAttributesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=UpdateAttributesRequest" })
  updateAttributesRequest: RemoveAttributesRequestBodyUpdateAttributesRequest;
}


export class RemoveAttributesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RemoveAttributesPathParams;

  @Metadata()
  headers: RemoveAttributesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: RemoveAttributesRequestBody;
}


export class RemoveAttributesResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  forbiddenException?: any;

  @Metadata()
  internalServerErrorException?: any;

  @Metadata()
  methodNotAllowedException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  payloadTooLargeException?: any;

  @Metadata()
  removeAttributesResponse?: shared.RemoveAttributesResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
