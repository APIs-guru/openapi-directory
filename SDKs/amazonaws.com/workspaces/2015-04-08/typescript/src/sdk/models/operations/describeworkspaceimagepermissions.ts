import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeWorkspaceImagePermissionsXAmzTargetEnum {
    WorkspacesServiceDescribeWorkspaceImagePermissions = "WorkspacesService.DescribeWorkspaceImagePermissions"
}


export class DescribeWorkspaceImagePermissionsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeWorkspaceImagePermissionsXAmzTargetEnum;
}


export class DescribeWorkspaceImagePermissionsRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeWorkspaceImagePermissionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeWorkspaceImagePermissionsRequest;
}


export class DescribeWorkspaceImagePermissionsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describeWorkspaceImagePermissionsResult?: shared.DescribeWorkspaceImagePermissionsResult;

  @Metadata()
  invalidParameterValuesException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
