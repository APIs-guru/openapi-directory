import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetResourceSharesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class GetResourceSharesHeaders extends SpeakeasyBase {
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

export enum GetResourceSharesRequestBodyResourceOwnerEnum {
    Self = "SELF"
,    OtherAccounts = "OTHER-ACCOUNTS"
}

export enum GetResourceSharesRequestBodyResourceShareStatusEnum {
    Pending = "PENDING"
,    Active = "ACTIVE"
,    Failed = "FAILED"
,    Deleting = "DELETING"
,    Deleted = "DELETED"
}


export class GetResourceSharesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=permissionArn" })
  permissionArn?: string;

  @Metadata({ data: "json, name=resourceOwner" })
  resourceOwner: GetResourceSharesRequestBodyResourceOwnerEnum;

  @Metadata({ data: "json, name=resourceShareArns" })
  resourceShareArns?: string[];

  @Metadata({ data: "json, name=resourceShareStatus" })
  resourceShareStatus?: GetResourceSharesRequestBodyResourceShareStatusEnum;

  @Metadata({ data: "json, name=tagFilters", elemType: shared.TagFilter })
  tagFilters?: shared.TagFilter[];
}


export class GetResourceSharesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetResourceSharesQueryParams;

  @Metadata()
  headers: GetResourceSharesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: GetResourceSharesRequestBody;
}


export class GetResourceSharesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getResourceSharesResponse?: shared.GetResourceSharesResponse;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  malformedArnException?: any;

  @Metadata()
  serverInternalException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unknownResourceException?: any;
}
