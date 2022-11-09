import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class Area120tablesTablesRowsBatchUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}


export class Area120tablesTablesRowsBatchUpdateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class Area120tablesTablesRowsBatchUpdateSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class Area120tablesTablesRowsBatchUpdateSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class Area120tablesTablesRowsBatchUpdateSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class Area120tablesTablesRowsBatchUpdateSecurityOption4 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class Area120tablesTablesRowsBatchUpdateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: Area120tablesTablesRowsBatchUpdateSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: Area120tablesTablesRowsBatchUpdateSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: Area120tablesTablesRowsBatchUpdateSecurityOption3;

  @Metadata({ data: "security, option=true" })
  option4?: Area120tablesTablesRowsBatchUpdateSecurityOption4;
}


export class Area120tablesTablesRowsBatchUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: Area120tablesTablesRowsBatchUpdatePathParams;

  @Metadata()
  queryParams: Area120tablesTablesRowsBatchUpdateQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.BatchUpdateRowsRequest;

  @Metadata()
  security: Area120tablesTablesRowsBatchUpdateSecurity;
}


export class Area120tablesTablesRowsBatchUpdateResponse extends SpeakeasyBase {
  @Metadata()
  batchUpdateRowsResponse?: shared.BatchUpdateRowsResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
