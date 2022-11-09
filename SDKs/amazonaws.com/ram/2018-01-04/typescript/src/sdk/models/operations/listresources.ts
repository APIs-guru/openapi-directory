import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListResourcesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class ListResourcesHeaders extends SpeakeasyBase {
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

export enum ListResourcesRequestBodyResourceOwnerEnum {
    Self = "SELF"
,    OtherAccounts = "OTHER-ACCOUNTS"
}


export class ListResourcesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=principal" })
  principal?: string;

  @Metadata({ data: "json, name=resourceArns" })
  resourceArns?: string[];

  @Metadata({ data: "json, name=resourceOwner" })
  resourceOwner: ListResourcesRequestBodyResourceOwnerEnum;

  @Metadata({ data: "json, name=resourceShareArns" })
  resourceShareArns?: string[];

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: string;
}


export class ListResourcesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListResourcesQueryParams;

  @Metadata()
  headers: ListResourcesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: ListResourcesRequestBody;
}


export class ListResourcesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  invalidResourceTypeException?: any;

  @Metadata()
  listResourcesResponse?: shared.ListResourcesResponse;

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
