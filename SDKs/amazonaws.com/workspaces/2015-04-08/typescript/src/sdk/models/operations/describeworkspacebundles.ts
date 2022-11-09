import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeWorkspaceBundlesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeWorkspaceBundlesXAmzTargetEnum {
    WorkspacesServiceDescribeWorkspaceBundles = "WorkspacesService.DescribeWorkspaceBundles"
}


export class DescribeWorkspaceBundlesHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeWorkspaceBundlesXAmzTargetEnum;
}


export class DescribeWorkspaceBundlesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeWorkspaceBundlesQueryParams;

  @Metadata()
  headers: DescribeWorkspaceBundlesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeWorkspaceBundlesRequest;
}


export class DescribeWorkspaceBundlesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeWorkspaceBundlesResult?: shared.DescribeWorkspaceBundlesResult;

  @Metadata()
  invalidParameterValuesException?: any;

  @Metadata()
  statusCode: number;
}
