import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMyAbusesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: shared.AbusesSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: number;
}


export class GetMyAbusesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetMyAbusesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetMyAbusesQueryParams;

  @Metadata()
  security: GetMyAbusesSecurity;
}


export class GetMyAbuses200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: any[];

  @Metadata({ data: "json, name=total" })
  total?: number;
}


export class GetMyAbusesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getMyAbuses200ApplicationJsonObject?: GetMyAbuses200ApplicationJson;
}
