import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ApigeeOrganizationsHostSecurityReportsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}


export class ApigeeOrganizationsHostSecurityReportsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dataset" })
  dataset?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=envgroupHostname" })
  envgroupHostname?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=submittedBy" })
  submittedBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class ApigeeOrganizationsHostSecurityReportsListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ApigeeOrganizationsHostSecurityReportsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ApigeeOrganizationsHostSecurityReportsListPathParams;

  @SpeakeasyMetadata()
  queryParams: ApigeeOrganizationsHostSecurityReportsListQueryParams;

  @SpeakeasyMetadata()
  security: ApigeeOrganizationsHostSecurityReportsListSecurity;
}


export class ApigeeOrganizationsHostSecurityReportsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  googleCloudApigeeV1ListSecurityReportsResponse?: shared.GoogleCloudApigeeV1ListSecurityReportsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
