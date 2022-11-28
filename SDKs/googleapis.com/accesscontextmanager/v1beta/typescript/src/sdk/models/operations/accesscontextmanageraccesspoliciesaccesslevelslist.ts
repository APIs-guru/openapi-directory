import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AccesscontextmanagerAccessPoliciesAccessLevelsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}

export enum AccesscontextmanagerAccessPoliciesAccessLevelsListAccessLevelFormatEnum {
    LevelFormatUnspecified = "LEVEL_FORMAT_UNSPECIFIED",
    AsDefined = "AS_DEFINED",
    Cel = "CEL"
}


export class AccesscontextmanagerAccessPoliciesAccessLevelsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accessLevelFormat" })
  accessLevelFormat?: AccesscontextmanagerAccessPoliciesAccessLevelsListAccessLevelFormatEnum;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class AccesscontextmanagerAccessPoliciesAccessLevelsListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AccesscontextmanagerAccessPoliciesAccessLevelsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AccesscontextmanagerAccessPoliciesAccessLevelsListPathParams;

  @SpeakeasyMetadata()
  queryParams: AccesscontextmanagerAccessPoliciesAccessLevelsListQueryParams;

  @SpeakeasyMetadata()
  security: AccesscontextmanagerAccessPoliciesAccessLevelsListSecurity;
}


export class AccesscontextmanagerAccessPoliciesAccessLevelsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listAccessLevelsResponse?: shared.ListAccessLevelsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
