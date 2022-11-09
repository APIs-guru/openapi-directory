import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeWorkspaceSnapshotsXAmzTargetEnum {
    WorkspacesServiceDescribeWorkspaceSnapshots = "WorkspacesService.DescribeWorkspaceSnapshots"
}


export class DescribeWorkspaceSnapshotsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeWorkspaceSnapshotsXAmzTargetEnum;
}


export class DescribeWorkspaceSnapshotsRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeWorkspaceSnapshotsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeWorkspaceSnapshotsRequest;
}


export class DescribeWorkspaceSnapshotsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describeWorkspaceSnapshotsResult?: shared.DescribeWorkspaceSnapshotsResult;

  @Metadata()
  invalidParameterValuesException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
