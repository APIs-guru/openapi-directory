import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListPrincipalsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class ListPrincipalsHeaders extends SpeakeasyBase {
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

export enum ListPrincipalsRequestBodyResourceOwnerEnum {
    Self = "SELF",
    OtherAccounts = "OTHER-ACCOUNTS"
}


export class ListPrincipalsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=principals" })
  principals?: string[];

  @SpeakeasyMetadata({ data: "json, name=resourceArn" })
  resourceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceOwner" })
  resourceOwner: ListPrincipalsRequestBodyResourceOwnerEnum;

  @SpeakeasyMetadata({ data: "json, name=resourceShareArns" })
  resourceShareArns?: string[];

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: string;
}


export class ListPrincipalsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListPrincipalsQueryParams;

  @SpeakeasyMetadata()
  headers: ListPrincipalsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: ListPrincipalsRequestBody;
}


export class ListPrincipalsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidNextTokenException?: any;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  listPrincipalsResponse?: shared.ListPrincipalsResponse;

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
