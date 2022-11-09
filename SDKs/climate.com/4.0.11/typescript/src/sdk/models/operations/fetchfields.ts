import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FetchFieldsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fieldName" })
  fieldName?: string;
}


export class FetchFieldsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Limit" })
  xLimit?: number;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Next-Token" })
  xNextToken?: string;
}


export class FetchFieldsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class FetchFieldsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2AuthorizationCode: shared.SchemeOauth2AuthorizationCode;
}


export class FetchFieldsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: FetchFieldsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: FetchFieldsSecurityOption2;
}


export class FetchFieldsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: FetchFieldsQueryParams;

  @Metadata()
  headers: FetchFieldsHeaders;

  @Metadata()
  security: FetchFieldsSecurity;
}


export class FetchFieldsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  empty?: Map<string, any>;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  fields?: any;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
