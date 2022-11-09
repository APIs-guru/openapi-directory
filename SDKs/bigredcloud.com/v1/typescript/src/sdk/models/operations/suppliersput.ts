import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SuppliersPutPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class SuppliersPutRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SuppliersPutPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SupplierDto;
}


export class SuppliersPutResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  suppliersPut200ApplicationJsonObject?: Map<string, any>;
}
