import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeWorkspaceDirectoriesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeWorkspaceDirectoriesXAmzTargetEnum {
    WorkspacesServiceDescribeWorkspaceDirectories = "WorkspacesService.DescribeWorkspaceDirectories"
}


export class DescribeWorkspaceDirectoriesHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: DescribeWorkspaceDirectoriesXAmzTargetEnum;
}


export class DescribeWorkspaceDirectoriesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeWorkspaceDirectoriesQueryParams;

  @Metadata()
  headers: DescribeWorkspaceDirectoriesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeWorkspaceDirectoriesRequest;
}


export class DescribeWorkspaceDirectoriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeWorkspaceDirectoriesResult?: shared.DescribeWorkspaceDirectoriesResult;

  @Metadata()
  invalidParameterValuesException?: any;

  @Metadata()
  statusCode: number;
}
