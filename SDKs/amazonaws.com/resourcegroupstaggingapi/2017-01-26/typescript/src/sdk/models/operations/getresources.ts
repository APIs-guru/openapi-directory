import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetResourcesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PaginationToken" })
  paginationToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ResourcesPerPage" })
  resourcesPerPage?: string;
}

export enum GetResourcesXAmzTargetEnum {
    ResourceGroupsTaggingApi20170126GetResources = "ResourceGroupsTaggingAPI_20170126.GetResources"
}


export class GetResourcesHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetResourcesXAmzTargetEnum;
}


export class GetResourcesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetResourcesQueryParams;

  @Metadata()
  headers: GetResourcesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetResourcesInput;
}


export class GetResourcesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getResourcesOutput?: shared.GetResourcesOutput;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  paginationTokenExpiredException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttledException?: any;
}
