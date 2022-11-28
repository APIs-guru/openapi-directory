import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteProjectPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class DeleteProjectHeaders extends SpeakeasyBase {
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


export class DeleteProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteProjectPathParams;

  @SpeakeasyMetadata()
  headers: DeleteProjectHeaders;
}


export class DeleteProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteProjectResult?: shared.DeleteProjectResult;

  @SpeakeasyMetadata()
  internalFailureException?: shared.InternalFailureException;

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
}
