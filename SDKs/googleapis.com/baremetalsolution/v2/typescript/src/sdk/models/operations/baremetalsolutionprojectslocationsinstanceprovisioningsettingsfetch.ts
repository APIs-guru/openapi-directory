import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=location" })
  location: string;
}


export class BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchQueryParams extends SpeakeasyBase {
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


export class BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchPathParams;

  @Metadata()
  queryParams: BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchQueryParams;

  @Metadata()
  security: BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchSecurity;
}


export class BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  fetchInstanceProvisioningSettingsResponse?: shared.FetchInstanceProvisioningSettingsResponse;

  @Metadata()
  statusCode: number;
}
