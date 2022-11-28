import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteOrdersIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteOrdersIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  fdcAuth: shared.SchemeFdcAuth;
}


export class DeleteOrdersIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteOrdersIdPathParams;

  @SpeakeasyMetadata()
  security: DeleteOrdersIdSecurity;
}


export class DeleteOrdersIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  oneordersGetResponses404ContentApplication1jsonSchema?: shared.OneordersGetResponses404ContentApplication1jsonSchema;

  @SpeakeasyMetadata()
  oneordersPostResponses201ContentApplication1jsonSchema?: shared.OneordersPostResponses201ContentApplication1jsonSchema;
}
