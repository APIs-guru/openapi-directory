import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateProjectQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=projectId" })
  projectId: string;
}


export class UpdateProjectHeaders extends SpeakeasyBase {
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


export class UpdateProjectRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contents" })
  contents?: string;
}


export class UpdateProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: UpdateProjectQueryParams;

  @SpeakeasyMetadata()
  headers: UpdateProjectHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateProjectRequestBody;
}


export class UpdateProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accountActionRequiredException?: shared.AccountActionRequiredException;

  @SpeakeasyMetadata()
  badRequestException?: shared.BadRequestException;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: shared.InternalFailureException;

  @SpeakeasyMetadata()
  limitExceededException?: shared.LimitExceededException;

  @SpeakeasyMetadata()
  notFoundException?: shared.NotFoundException;

  @SpeakeasyMetadata()
  serviceUnavailableException?: shared.ServiceUnavailableException;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: shared.TooManyRequestsException;

  @SpeakeasyMetadata()
  unauthorizedException?: shared.UnauthorizedException;

  @SpeakeasyMetadata()
  updateProjectResult?: shared.UpdateProjectResult;
}
