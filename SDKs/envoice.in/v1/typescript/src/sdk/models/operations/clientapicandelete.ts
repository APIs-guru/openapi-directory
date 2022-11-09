import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ClientApiCanDeleteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: number;
}


export class ClientApiCanDeleteHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class ClientApiCanDeleteRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ClientApiCanDeleteQueryParams;

  @Metadata()
  headers: ClientApiCanDeleteHeaders;
}


export class ClientApiCanDeleteResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  clientApiCanDelete200ApplicationJsonBoolean?: boolean;

  @Metadata()
  clientApiCanDelete200TextJsonBoolean?: boolean;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
