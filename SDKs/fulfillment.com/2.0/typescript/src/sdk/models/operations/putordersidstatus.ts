import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutOrdersIdStatusPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutOrdersIdStatusStatusTypeSimpleV2Status extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;
}


export class PutOrdersIdStatusStatusTypeSimpleV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=reason" })
  reason: string;

  @Metadata({ data: "json, name=status" })
  status: PutOrdersIdStatusStatusTypeSimpleV2Status;
}


export class PutOrdersIdStatusSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  fdcAuth: shared.SchemeFdcAuth;
}


export class PutOrdersIdStatusRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutOrdersIdStatusPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutOrdersIdStatusStatusTypeSimpleV2;

  @Metadata()
  security: PutOrdersIdStatusSecurity;
}


export class PutOrdersIdStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  oneordersPostResponses201ContentApplication1jsonSchema?: shared.OneordersPostResponses201ContentApplication1jsonSchema;
}
