import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SearchParticipantsToAddPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class SearchParticipantsToAddQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;
}


export class SearchParticipantsToAddSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class SearchParticipantsToAddRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SearchParticipantsToAddPathParams;

  @Metadata()
  queryParams: SearchParticipantsToAddQueryParams;

  @Metadata()
  security: SearchParticipantsToAddSecurity;
}


export class SearchParticipantsToAddResponse extends SpeakeasyBase {
  @Metadata()
  addParticipantsSearchResults?: any[];

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
