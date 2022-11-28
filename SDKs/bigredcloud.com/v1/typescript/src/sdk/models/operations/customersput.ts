import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CustomersPutPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class CustomersPutRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CustomersPutPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CustomerDto;
}


export class CustomersPutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customersPut200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
