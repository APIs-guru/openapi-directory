import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutOrdersIdStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutOrdersIdStatusStatusTypeSimpleV2Status extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;
}


export class PutOrdersIdStatusStatusTypeSimpleV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PutOrdersIdStatusStatusTypeSimpleV2Status;
}


export class PutOrdersIdStatusSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  fdcAuth: shared.SchemeFdcAuth;
}


export class PutOrdersIdStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutOrdersIdStatusPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutOrdersIdStatusStatusTypeSimpleV2;

  @SpeakeasyMetadata()
  security: PutOrdersIdStatusSecurity;
}


export class PutOrdersIdStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  oneordersPostResponses201ContentApplication1jsonSchema?: shared.OneordersPostResponses201ContentApplication1jsonSchema;
}
