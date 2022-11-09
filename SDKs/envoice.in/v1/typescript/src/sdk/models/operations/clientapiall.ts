import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ClientApiAllHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class ClientApiAllRequest extends SpeakeasyBase {
  @Metadata()
  headers: ClientApiAllHeaders;
}


export class ClientApiAllResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata({ elemType: shared.ClientDetailsApiModel })
  clientDetailsApiModels?: shared.ClientDetailsApiModel[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
