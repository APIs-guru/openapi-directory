import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=sequencedRollout" })
  sequencedRollout?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeploySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployPathParams;

  @Metadata()
  queryParams: ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployQueryParams;

  @Metadata()
  security: ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeploySecurity;
}


export class ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  googleProtobufEmpty?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
