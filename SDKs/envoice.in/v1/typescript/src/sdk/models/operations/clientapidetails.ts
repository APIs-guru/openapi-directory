import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ClientApiDetailsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: number;
}


export class ClientApiDetailsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class ClientApiDetailsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ClientApiDetailsQueryParams;

  @Metadata()
  headers: ClientApiDetailsHeaders;
}


export class ClientApiDetailsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  clientDetailsApiModel?: shared.ClientDetailsApiModel;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
