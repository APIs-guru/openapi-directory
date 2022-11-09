import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListPrincipalsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class ListPrincipalsHeaders extends SpeakeasyBase {
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

export enum ListPrincipalsRequestBodyResourceOwnerEnum {
    Self = "SELF"
,    OtherAccounts = "OTHER-ACCOUNTS"
}


export class ListPrincipalsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=principals" })
  principals?: string[];

  @Metadata({ data: "json, name=resourceArn" })
  resourceArn?: string;

  @Metadata({ data: "json, name=resourceOwner" })
  resourceOwner: ListPrincipalsRequestBodyResourceOwnerEnum;

  @Metadata({ data: "json, name=resourceShareArns" })
  resourceShareArns?: string[];

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: string;
}


export class ListPrincipalsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListPrincipalsQueryParams;

  @Metadata()
  headers: ListPrincipalsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: ListPrincipalsRequestBody;
}


export class ListPrincipalsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  listPrincipalsResponse?: shared.ListPrincipalsResponse;

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
