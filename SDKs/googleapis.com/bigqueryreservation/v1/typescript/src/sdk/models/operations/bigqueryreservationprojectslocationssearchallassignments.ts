import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BigqueryreservationProjectsLocationsSearchAllAssignmentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}


export class BigqueryreservationProjectsLocationsSearchAllAssignmentsQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class BigqueryreservationProjectsLocationsSearchAllAssignmentsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigqueryreservationProjectsLocationsSearchAllAssignmentsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigqueryreservationProjectsLocationsSearchAllAssignmentsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: BigqueryreservationProjectsLocationsSearchAllAssignmentsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: BigqueryreservationProjectsLocationsSearchAllAssignmentsSecurityOption2;
}


export class BigqueryreservationProjectsLocationsSearchAllAssignmentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BigqueryreservationProjectsLocationsSearchAllAssignmentsPathParams;

  @Metadata()
  queryParams: BigqueryreservationProjectsLocationsSearchAllAssignmentsQueryParams;

  @Metadata()
  security: BigqueryreservationProjectsLocationsSearchAllAssignmentsSecurity;
}


export class BigqueryreservationProjectsLocationsSearchAllAssignmentsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  searchAllAssignmentsResponse?: shared.SearchAllAssignmentsResponse;

  @Metadata()
  statusCode: number;
}
