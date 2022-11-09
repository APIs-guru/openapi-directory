import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetResourceShareInvitationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class GetResourceShareInvitationsHeaders extends SpeakeasyBase {
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


export class GetResourceShareInvitationsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=resourceShareArns" })
  resourceShareArns?: string[];

  @Metadata({ data: "json, name=resourceShareInvitationArns" })
  resourceShareInvitationArns?: string[];
}


export class GetResourceShareInvitationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetResourceShareInvitationsQueryParams;

  @Metadata()
  headers: GetResourceShareInvitationsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: GetResourceShareInvitationsRequestBody;
}


export class GetResourceShareInvitationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getResourceShareInvitationsResponse?: shared.GetResourceShareInvitationsResponse;

  @Metadata()
  invalidMaxResultsException?: any;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  malformedArnException?: any;

  @Metadata()
  resourceShareInvitationArnNotFoundException?: any;

  @Metadata()
  serverInternalException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unknownResourceException?: any;
}
