import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SuppliersPutPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class SuppliersPutRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SuppliersPutPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SupplierDto;
}


export class SuppliersPutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  suppliersPut200ApplicationJsonObject?: Map<string, any>;
}
