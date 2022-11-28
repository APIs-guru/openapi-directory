import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FetchFieldsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fieldName" })
  fieldName?: string;
}


export class FetchFieldsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Limit" })
  xLimit?: number;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Next-Token" })
  xNextToken?: string;
}


export class FetchFieldsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey?: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2AuthorizationCode?: shared.SchemeOauth2AuthorizationCode;
}


export class FetchFieldsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: FetchFieldsQueryParams;

  @SpeakeasyMetadata()
  headers: FetchFieldsHeaders;

  @SpeakeasyMetadata()
  security: FetchFieldsSecurity;
}


export class FetchFieldsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  empty?: Map<string, any>;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  fields?: any;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
