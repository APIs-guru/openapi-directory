import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTagValuesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PaginationToken" })
  paginationToken?: string;
}

export enum GetTagValuesXAmzTargetEnum {
    ResourceGroupsTaggingApi20170126GetTagValues = "ResourceGroupsTaggingAPI_20170126.GetTagValues"
}


export class GetTagValuesHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetTagValuesXAmzTargetEnum;
}


export class GetTagValuesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetTagValuesQueryParams;

  @Metadata()
  headers: GetTagValuesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetTagValuesInput;
}


export class GetTagValuesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getTagValuesOutput?: shared.GetTagValuesOutput;

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
