import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SearchSpaceParticipantsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class SearchSpaceParticipantsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;
}


export class SearchSpaceParticipantsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class SearchSpaceParticipantsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SearchSpaceParticipantsPathParams;

  @SpeakeasyMetadata()
  queryParams: SearchSpaceParticipantsQueryParams;

  @SpeakeasyMetadata()
  security: SearchSpaceParticipantsSecurity;
}


export class SearchSpaceParticipantsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  participantsSearchResultLarges?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
