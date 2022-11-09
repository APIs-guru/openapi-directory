import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLikesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class GetLikesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=numberOfResults" })
  numberOfResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=searchPointer" })
  searchPointer?: string;
}


export class GetLikesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetLikesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLikesPathParams;

  @Metadata()
  queryParams: GetLikesQueryParams;

  @Metadata()
  security: GetLikesSecurity;
}


export class GetLikesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  participantsLikeResult?: any;

  @Metadata()
  statusCode: number;
}
