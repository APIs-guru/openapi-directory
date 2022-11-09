import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListPendingInvitationResourcesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class ListPendingInvitationResourcesHeaders extends SpeakeasyBase {
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


export class ListPendingInvitationResourcesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=resourceShareInvitationArn" })
  resourceShareInvitationArn: string;
}


export class ListPendingInvitationResourcesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListPendingInvitationResourcesQueryParams;

  @Metadata()
  headers: ListPendingInvitationResourcesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: ListPendingInvitationResourcesRequestBody;
}


export class ListPendingInvitationResourcesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  listPendingInvitationResourcesResponse?: shared.ListPendingInvitationResourcesResponse;

  @Metadata()
  malformedArnException?: any;

  @Metadata()
  missingRequiredParameterException?: any;

  @Metadata()
  resourceShareInvitationAlreadyRejectedException?: any;

  @Metadata()
  resourceShareInvitationArnNotFoundException?: any;

  @Metadata()
  resourceShareInvitationExpiredException?: any;

  @Metadata()
  serverInternalException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;
}
