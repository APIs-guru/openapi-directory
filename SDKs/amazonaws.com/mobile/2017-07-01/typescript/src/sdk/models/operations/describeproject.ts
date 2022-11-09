import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeProjectQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=projectId" })
  projectId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=syncFromResources" })
  syncFromResources?: boolean;
}


export class DescribeProjectHeaders extends SpeakeasyBase {
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


export class DescribeProjectRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeProjectQueryParams;

  @Metadata()
  headers: DescribeProjectHeaders;
}


export class DescribeProjectResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: shared.BadRequestException;

  @Metadata()
  contentType: string;

  @Metadata()
  describeProjectResult?: shared.DescribeProjectResult;

  @Metadata()
  internalFailureException?: shared.InternalFailureException;

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
}
