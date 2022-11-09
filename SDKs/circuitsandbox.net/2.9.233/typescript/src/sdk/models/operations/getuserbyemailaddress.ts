import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUserByEmailAddressPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=emailAddress" })
  emailAddress: string;
}


export class GetUserByEmailAddressQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=secondaryLookup" })
  secondaryLookup?: boolean;
}


export class GetUserByEmailAddressSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetUserByEmailAddressRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUserByEmailAddressPathParams;

  @Metadata()
  queryParams: GetUserByEmailAddressQueryParams;

  @Metadata()
  security: GetUserByEmailAddressSecurity;
}


export class GetUserByEmailAddressResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  user?: any;
}
