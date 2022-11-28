import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=partnerId" })
  partnerId: string;
}


export class AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncQueryParams extends SpeakeasyBase {
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


export class AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncPathParams;

  @SpeakeasyMetadata()
  queryParams: AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.UnclaimDevicesRequest;
}


export class AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  operation?: shared.Operation;

  @SpeakeasyMetadata()
  statusCode: number;
}
