import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUserByEmailAddressPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=emailAddress" })
  emailAddress: string;
}


export class GetUserByEmailAddressQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=secondaryLookup" })
  secondaryLookup?: boolean;
}


export class GetUserByEmailAddressSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetUserByEmailAddressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUserByEmailAddressPathParams;

  @SpeakeasyMetadata()
  queryParams: GetUserByEmailAddressQueryParams;

  @SpeakeasyMetadata()
  security: GetUserByEmailAddressSecurity;
}


export class GetUserByEmailAddressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  user?: any;
}
