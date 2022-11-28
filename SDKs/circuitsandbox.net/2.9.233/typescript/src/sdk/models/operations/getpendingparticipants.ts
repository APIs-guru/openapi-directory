import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPendingParticipantsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetPendingParticipantsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=numberOfResults" })
  numberOfResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchPointer" })
  searchPointer?: string;
}


export class GetPendingParticipantsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetPendingParticipantsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPendingParticipantsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetPendingParticipantsQueryParams;

  @SpeakeasyMetadata()
  security: GetPendingParticipantsSecurity;
}


export class GetPendingParticipantsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  participantsSearchResult?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
