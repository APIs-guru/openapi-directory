import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeWorkspacesConnectionStatusXAmzTargetEnum {
    WorkspacesServiceDescribeWorkspacesConnectionStatus = "WorkspacesService.DescribeWorkspacesConnectionStatus"
}


export class DescribeWorkspacesConnectionStatusHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeWorkspacesConnectionStatusXAmzTargetEnum;
}


export class DescribeWorkspacesConnectionStatusRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeWorkspacesConnectionStatusHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeWorkspacesConnectionStatusRequest;
}


export class DescribeWorkspacesConnectionStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeWorkspacesConnectionStatusResult?: shared.DescribeWorkspacesConnectionStatusResult;

  @Metadata()
  invalidParameterValuesException?: any;

  @Metadata()
  statusCode: number;
}
