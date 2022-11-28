import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ClientApiCanDeleteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: number;
}


export class ClientApiCanDeleteHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class ClientApiCanDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ClientApiCanDeleteQueryParams;

  @SpeakeasyMetadata()
  headers: ClientApiCanDeleteHeaders;
}


export class ClientApiCanDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  clientApiCanDelete200ApplicationJsonBoolean?: boolean;

  @SpeakeasyMetadata()
  clientApiCanDelete200TextJsonBoolean?: boolean;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
