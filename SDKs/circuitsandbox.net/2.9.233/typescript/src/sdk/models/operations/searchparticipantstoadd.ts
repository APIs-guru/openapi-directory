import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SearchParticipantsToAddPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class SearchParticipantsToAddQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;
}


export class SearchParticipantsToAddSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class SearchParticipantsToAddRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SearchParticipantsToAddPathParams;

  @SpeakeasyMetadata()
  queryParams: SearchParticipantsToAddQueryParams;

  @SpeakeasyMetadata()
  security: SearchParticipantsToAddSecurity;
}


export class SearchParticipantsToAddResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  addParticipantsSearchResults?: any[];

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
