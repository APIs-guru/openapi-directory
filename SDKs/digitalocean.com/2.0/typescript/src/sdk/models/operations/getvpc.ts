import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetVpcPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=vpc_id" })
  vpcId: string;
}


export class GetVpcRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVpcPathParams;
}


export class GetVpc200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=vpc" })
  vpc?: shared.Onev21vpcsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesVpcsItems;
}


export class GetVpc401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetVpcResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getVpc200ApplicationJsonObject?: GetVpc200ApplicationJson;

  @Metadata()
  getVpc401ApplicationJsonObject?: GetVpc401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
