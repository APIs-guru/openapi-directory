import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLikesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class GetLikesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=numberOfResults" })
  numberOfResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchPointer" })
  searchPointer?: string;
}


export class GetLikesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetLikesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLikesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetLikesQueryParams;

  @SpeakeasyMetadata()
  security: GetLikesSecurity;
}


export class GetLikesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  participantsLikeResult?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
