import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateVpcRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=ip_range" })
  ipRange?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=region" })
  region: string;
}


export class CreateVpcRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: CreateVpcRequestBody;
}


export class CreateVpc201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=vpc" })
  vpc?: shared.Onev21vpcsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesVpcsItems;
}


export class CreateVpc401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class CreateVpcResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  createVpc201ApplicationJsonObject?: CreateVpc201ApplicationJson;

  @Metadata()
  createVpc401ApplicationJsonObject?: CreateVpc401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
