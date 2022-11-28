import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DescribeProjectQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=projectId" })
  projectId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=syncFromResources" })
  syncFromResources?: boolean;
}


export class DescribeProjectHeaders extends SpeakeasyBase {
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


export class DescribeProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DescribeProjectQueryParams;

  @SpeakeasyMetadata()
  headers: DescribeProjectHeaders;
}


export class DescribeProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: shared.BadRequestException;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  describeProjectResult?: shared.DescribeProjectResult;

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
