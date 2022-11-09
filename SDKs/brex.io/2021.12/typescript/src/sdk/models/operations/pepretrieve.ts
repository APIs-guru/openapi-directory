import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PepRetrievePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum PepRetrieveAcceptEnum {
    ApplicationJson = "application/json"
,    ApplicationPdf = "application/pdf"
}


export class PepRetrieveHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=accept" })
  accept?: PepRetrieveAcceptEnum;
}


export class PepRetrieveSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class PepRetrieveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PepRetrievePathParams;

  @Metadata()
  headers: PepRetrieveHeaders;

  @Metadata()
  security: PepRetrieveSecurity;
}


export class PepRetrieveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  pepRetrieve200ApplicationJsonAny?: any;

  @Metadata()
  pepRetrieveDefaultApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
