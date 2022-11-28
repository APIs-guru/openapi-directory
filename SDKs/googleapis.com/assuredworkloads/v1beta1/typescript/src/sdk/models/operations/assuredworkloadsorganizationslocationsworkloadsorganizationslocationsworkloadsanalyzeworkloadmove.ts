import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AssuredworkloadsOrganizationsLocationsWorkloadsOrganizationsLocationsWorkloadsAnalyzeWorkloadMovePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=source" })
  source: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target" })
  target: string;
}


export class AssuredworkloadsOrganizationsLocationsWorkloadsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=project" })
  project?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class AssuredworkloadsOrganizationsLocationsWorkloadsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AssuredworkloadsOrganizationsLocationsWorkloadsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AssuredworkloadsOrganizationsLocationsWorkloadsOrganizationsLocationsWorkloadsAnalyzeWorkloadMovePathParams;

  @SpeakeasyMetadata()
  queryParams: AssuredworkloadsOrganizationsLocationsWorkloadsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveQueryParams;

  @SpeakeasyMetadata()
  security: AssuredworkloadsOrganizationsLocationsWorkloadsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveSecurity;
}


export class AssuredworkloadsOrganizationsLocationsWorkloadsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  googleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse?: shared.GoogleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
