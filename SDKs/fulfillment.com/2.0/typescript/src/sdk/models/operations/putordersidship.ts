import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutOrdersIdShipPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutOrdersIdShipOrderShipV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=trackingNumber" })
  trackingNumber: string;

  @SpeakeasyMetadata({ data: "json, name=weightOverride" })
  weightOverride?: number;
}


export class PutOrdersIdShipSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  fdcAuth: shared.SchemeFdcAuth;
}


export class PutOrdersIdShipRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutOrdersIdShipPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutOrdersIdShipOrderShipV2;

  @SpeakeasyMetadata()
  security: PutOrdersIdShipSecurity;
}


export class PutOrdersIdShipResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  oneordersPostResponses201ContentApplication1jsonSchema?: shared.OneordersPostResponses201ContentApplication1jsonSchema;
}
