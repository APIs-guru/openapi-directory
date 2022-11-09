import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeIpGroupsXAmzTargetEnum {
    WorkspacesServiceDescribeIpGroups = "WorkspacesService.DescribeIpGroups"
}


export class DescribeIpGroupsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeIpGroupsXAmzTargetEnum;
}


export class DescribeIpGroupsRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeIpGroupsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeIpGroupsRequest;
}


export class DescribeIpGroupsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describeIpGroupsResult?: shared.DescribeIpGroupsResult;

  @Metadata()
  invalidParameterValuesException?: any;

  @Metadata()
  statusCode: number;
}
