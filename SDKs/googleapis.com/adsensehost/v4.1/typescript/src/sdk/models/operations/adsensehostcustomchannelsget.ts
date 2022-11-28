import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AdsensehostCustomchannelsGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=adClientId" })
  adClientId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customChannelId" })
  customChannelId: string;
}


export class AdsensehostCustomchannelsGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class AdsensehostCustomchannelsGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdsensehostCustomchannelsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AdsensehostCustomchannelsGetPathParams;

  @SpeakeasyMetadata()
  queryParams: AdsensehostCustomchannelsGetQueryParams;

  @SpeakeasyMetadata()
  security: AdsensehostCustomchannelsGetSecurity;
}


export class AdsensehostCustomchannelsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customChannel?: shared.CustomChannel;

  @SpeakeasyMetadata()
  statusCode: number;
}
