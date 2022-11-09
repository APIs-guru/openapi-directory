import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPendingParticipantsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetPendingParticipantsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=numberOfResults" })
  numberOfResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=searchPointer" })
  searchPointer?: string;
}


export class GetPendingParticipantsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetPendingParticipantsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPendingParticipantsPathParams;

  @Metadata()
  queryParams: GetPendingParticipantsQueryParams;

  @Metadata()
  security: GetPendingParticipantsSecurity;
}


export class GetPendingParticipantsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  participantsSearchResult?: any;

  @Metadata()
  statusCode: number;
}
