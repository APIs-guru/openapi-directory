import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AndroidenterpriseEnterprisesSendTestPushNotificationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=enterpriseId" })
  enterpriseId: string;
}


export class AndroidenterpriseEnterprisesSendTestPushNotificationQueryParams extends SpeakeasyBase {
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


export class AndroidenterpriseEnterprisesSendTestPushNotificationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AndroidenterpriseEnterprisesSendTestPushNotificationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AndroidenterpriseEnterprisesSendTestPushNotificationPathParams;

  @Metadata()
  queryParams: AndroidenterpriseEnterprisesSendTestPushNotificationQueryParams;

  @Metadata()
  security: AndroidenterpriseEnterprisesSendTestPushNotificationSecurity;
}


export class AndroidenterpriseEnterprisesSendTestPushNotificationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  enterprisesSendTestPushNotificationResponse?: shared.EnterprisesSendTestPushNotificationResponse;

  @Metadata()
  statusCode: number;
}
