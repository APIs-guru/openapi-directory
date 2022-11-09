import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DirectoryOrgunitsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=customerId" })
  customerId: string;
}

export enum DirectoryOrgunitsListTypeEnum {
    All = "all"
,    Children = "children"
}


export class DirectoryOrgunitsListQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=orgUnitPath" })
  orgUnitPath?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: DirectoryOrgunitsListTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class DirectoryOrgunitsListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DirectoryOrgunitsListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DirectoryOrgunitsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DirectoryOrgunitsListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DirectoryOrgunitsListSecurityOption2;
}


export class DirectoryOrgunitsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DirectoryOrgunitsListPathParams;

  @Metadata()
  queryParams: DirectoryOrgunitsListQueryParams;

  @Metadata()
  security: DirectoryOrgunitsListSecurity;
}


export class DirectoryOrgunitsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  orgUnits?: shared.OrgUnits;

  @Metadata()
  statusCode: number;
}
