import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CustomersPutPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class CustomersPutRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CustomersPutPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CustomerDto;
}


export class CustomersPutResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  customersPut200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
