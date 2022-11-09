import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateProjectQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=projectId" })
  projectId: string;
}


export class UpdateProjectHeaders extends SpeakeasyBase {
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


export class UpdateProjectRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=contents" })
  contents?: string;
}


export class UpdateProjectRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: UpdateProjectQueryParams;

  @Metadata()
  headers: UpdateProjectHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateProjectRequestBody;
}


export class UpdateProjectResponse extends SpeakeasyBase {
  @Metadata()
  accountActionRequiredException?: shared.AccountActionRequiredException;

  @Metadata()
  badRequestException?: shared.BadRequestException;

  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: shared.InternalFailureException;

  @Metadata()
  limitExceededException?: shared.LimitExceededException;

  @Metadata()
  notFoundException?: shared.NotFoundException;

  @Metadata()
  serviceUnavailableException?: shared.ServiceUnavailableException;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: shared.TooManyRequestsException;

  @Metadata()
  unauthorizedException?: shared.UnauthorizedException;

  @Metadata()
  updateProjectResult?: shared.UpdateProjectResult;
}
