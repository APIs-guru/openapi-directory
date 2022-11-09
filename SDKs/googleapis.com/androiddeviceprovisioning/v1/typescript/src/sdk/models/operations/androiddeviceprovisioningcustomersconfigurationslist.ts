import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AndroiddeviceprovisioningCustomersConfigurationsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}


export class AndroiddeviceprovisioningCustomersConfigurationsListQueryParams extends SpeakeasyBase {
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


export class AndroiddeviceprovisioningCustomersConfigurationsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AndroiddeviceprovisioningCustomersConfigurationsListPathParams;

  @Metadata()
  queryParams: AndroiddeviceprovisioningCustomersConfigurationsListQueryParams;
}


export class AndroiddeviceprovisioningCustomersConfigurationsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  customerListConfigurationsResponse?: shared.CustomerListConfigurationsResponse;

  @Metadata()
  statusCode: number;
}
