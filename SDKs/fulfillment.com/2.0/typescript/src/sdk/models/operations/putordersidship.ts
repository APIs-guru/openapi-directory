import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutOrdersIdShipPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutOrdersIdShipOrderShipV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=trackingNumber" })
  trackingNumber: string;

  @Metadata({ data: "json, name=weightOverride" })
  weightOverride?: number;
}


export class PutOrdersIdShipSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  fdcAuth: shared.SchemeFdcAuth;
}


export class PutOrdersIdShipRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutOrdersIdShipPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutOrdersIdShipOrderShipV2;

  @Metadata()
  security: PutOrdersIdShipSecurity;
}


export class PutOrdersIdShipResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  oneordersPostResponses201ContentApplication1jsonSchema?: shared.OneordersPostResponses201ContentApplication1jsonSchema;
}
