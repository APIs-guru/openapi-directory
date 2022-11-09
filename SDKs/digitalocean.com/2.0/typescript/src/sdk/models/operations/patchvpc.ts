import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchVpcPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=vpc_id" })
  vpcId: string;
}


export class PatchVpcRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=default" })
  default?: boolean;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class PatchVpcRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchVpcPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: PatchVpcRequestBody;
}


export class PatchVpc200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=vpc" })
  vpc?: shared.Onev21vpcsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesVpcsItems;
}


export class PatchVpc401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class PatchVpcResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  patchVpc200ApplicationJsonObject?: PatchVpc200ApplicationJson;

  @Metadata()
  patchVpc401ApplicationJsonObject?: PatchVpc401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
