import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ApigeeOrganizationsSitesApicategoriesGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class ApigeeOrganizationsSitesApicategoriesGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=envgroupHostname" })
  envgroupHostname?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=realtime" })
  realtime?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=select" })
  select?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortby" })
  sortby?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeRange" })
  timeRange?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeUnit" })
  timeUnit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=topk" })
  topk?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tsAscending" })
  tsAscending?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tzo" })
  tzo?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class ApigeeOrganizationsSitesApicategoriesGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ApigeeOrganizationsSitesApicategoriesGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ApigeeOrganizationsSitesApicategoriesGetPathParams;

  @Metadata()
  queryParams: ApigeeOrganizationsSitesApicategoriesGetQueryParams;

  @Metadata()
  security: ApigeeOrganizationsSitesApicategoriesGetSecurity;
}


export class ApigeeOrganizationsSitesApicategoriesGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  googleCloudApigeeV1ApiCategory?: shared.GoogleCloudApigeeV1ApiCategory;

  @Metadata()
  statusCode: number;
}
