import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PepRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum PepRetrieveAcceptEnum {
    ApplicationJson = "application/json",
    ApplicationPdf = "application/pdf"
}


export class PepRetrieveHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=accept" })
  accept?: PepRetrieveAcceptEnum;
}


export class PepRetrieveSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class PepRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PepRetrievePathParams;

  @SpeakeasyMetadata()
  headers: PepRetrieveHeaders;

  @SpeakeasyMetadata()
  security: PepRetrieveSecurity;
}


export class PepRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pepRetrieve200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  pepRetrieveDefaultApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
