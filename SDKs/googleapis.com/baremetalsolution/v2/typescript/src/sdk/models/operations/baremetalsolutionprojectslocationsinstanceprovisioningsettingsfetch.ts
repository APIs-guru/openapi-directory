import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" })
  location: string;
}


export class BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchQueryParams extends SpeakeasyBase {
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


export class BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchPathParams;

  @SpeakeasyMetadata()
  queryParams: BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchQueryParams;

  @SpeakeasyMetadata()
  security: BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchSecurity;
}


export class BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  fetchInstanceProvisioningSettingsResponse?: shared.FetchInstanceProvisioningSettingsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
