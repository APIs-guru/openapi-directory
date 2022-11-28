import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class Area120tablesTablesRowsBatchCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}


export class Area120tablesTablesRowsBatchCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class Area120tablesTablesRowsBatchCreateSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class Area120tablesTablesRowsBatchCreateSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class Area120tablesTablesRowsBatchCreateSecurityOption3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class Area120tablesTablesRowsBatchCreateSecurityOption4 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class Area120tablesTablesRowsBatchCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: Area120tablesTablesRowsBatchCreateSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: Area120tablesTablesRowsBatchCreateSecurityOption2;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option3?: Area120tablesTablesRowsBatchCreateSecurityOption3;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option4?: Area120tablesTablesRowsBatchCreateSecurityOption4;
}


export class Area120tablesTablesRowsBatchCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: Area120tablesTablesRowsBatchCreatePathParams;

  @SpeakeasyMetadata()
  queryParams: Area120tablesTablesRowsBatchCreateQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.BatchCreateRowsRequest;

  @SpeakeasyMetadata()
  security: Area120tablesTablesRowsBatchCreateSecurity;
}


export class Area120tablesTablesRowsBatchCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchCreateRowsResponse?: shared.BatchCreateRowsResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
