import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTagKeysQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PaginationToken" })
  paginationToken?: string;
}

export enum GetTagKeysXAmzTargetEnum {
    ResourceGroupsTaggingApi20170126GetTagKeys = "ResourceGroupsTaggingAPI_20170126.GetTagKeys"
}


export class GetTagKeysHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetTagKeysXAmzTargetEnum;
}


export class GetTagKeysRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetTagKeysQueryParams;

  @Metadata()
  headers: GetTagKeysHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetTagKeysInput;
}


export class GetTagKeysResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getTagKeysOutput?: shared.GetTagKeysOutput;

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
