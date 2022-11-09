import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SearchSpaceParticipantsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class SearchSpaceParticipantsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;
}


export class SearchSpaceParticipantsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class SearchSpaceParticipantsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SearchSpaceParticipantsPathParams;

  @Metadata()
  queryParams: SearchSpaceParticipantsQueryParams;

  @Metadata()
  security: SearchSpaceParticipantsSecurity;
}


export class SearchSpaceParticipantsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  participantsSearchResultLarges?: any[];

  @Metadata()
  statusCode: number;
}
