import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetResourceSharesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class GetResourceSharesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}

export enum GetResourceSharesRequestBodyResourceOwnerEnum {
    Self = "SELF",
    OtherAccounts = "OTHER-ACCOUNTS"
}

export enum GetResourceSharesRequestBodyResourceShareStatusEnum {
    Pending = "PENDING",
    Active = "ACTIVE",
    Failed = "FAILED",
    Deleting = "DELETING",
    Deleted = "DELETED"
}


export class GetResourceSharesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=permissionArn" })
  permissionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceOwner" })
  resourceOwner: GetResourceSharesRequestBodyResourceOwnerEnum;

  @SpeakeasyMetadata({ data: "json, name=resourceShareArns" })
  resourceShareArns?: string[];

  @SpeakeasyMetadata({ data: "json, name=resourceShareStatus" })
  resourceShareStatus?: GetResourceSharesRequestBodyResourceShareStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tagFilters", elemType: shared.TagFilter })
  tagFilters?: shared.TagFilter[];
}


export class GetResourceSharesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetResourceSharesQueryParams;

  @SpeakeasyMetadata()
  headers: GetResourceSharesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: GetResourceSharesRequestBody;
}


export class GetResourceSharesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getResourceSharesResponse?: shared.GetResourceSharesResponse;

  @SpeakeasyMetadata()
  invalidNextTokenException?: any;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  malformedArnException?: any;

  @SpeakeasyMetadata()
  serverInternalException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unknownResourceException?: any;
}
