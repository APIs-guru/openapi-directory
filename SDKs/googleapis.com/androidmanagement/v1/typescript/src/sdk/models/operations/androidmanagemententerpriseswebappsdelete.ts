import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AndroidmanagementEnterprisesWebAppsDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}

export enum AndroidmanagementEnterprisesWebAppsDeleteWipeDataFlagsEnum {
    WipeDataFlagUnspecified = "WIPE_DATA_FLAG_UNSPECIFIED",
    PreserveResetProtectionData = "PRESERVE_RESET_PROTECTION_DATA",
    WipeExternalStorage = "WIPE_EXTERNAL_STORAGE"
}


export class AndroidmanagementEnterprisesWebAppsDeleteQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=wipeDataFlags" })
  wipeDataFlags?: AndroidmanagementEnterprisesWebAppsDeleteWipeDataFlagsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=wipeReasonMessage" })
  wipeReasonMessage?: string;
}


export class AndroidmanagementEnterprisesWebAppsDeleteSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AndroidmanagementEnterprisesWebAppsDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AndroidmanagementEnterprisesWebAppsDeletePathParams;

  @SpeakeasyMetadata()
  queryParams: AndroidmanagementEnterprisesWebAppsDeleteQueryParams;

  @SpeakeasyMetadata()
  security: AndroidmanagementEnterprisesWebAppsDeleteSecurity;
}


export class AndroidmanagementEnterprisesWebAppsDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  empty?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
