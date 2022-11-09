import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDockerCredentialsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=expiry_seconds" })
  expirySeconds?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=read_write" })
  readWrite?: boolean;
}


export class GetDockerCredentialsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDockerCredentialsQueryParams;
}


export class GetDockerCredentials200ApplicationJsonAuthsRegistryDigitaloceanCom extends SpeakeasyBase {
  @Metadata({ data: "json, name=auth" })
  auth?: string;
}


export class GetDockerCredentials200ApplicationJsonAuths extends SpeakeasyBase {
  @Metadata({ data: "json, name=registry.digitalocean.com" })
  registryDigitaloceanCom?: GetDockerCredentials200ApplicationJsonAuthsRegistryDigitaloceanCom;
}


export class GetDockerCredentials200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=auths" })
  auths?: GetDockerCredentials200ApplicationJsonAuths;
}


export class GetDockerCredentials401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetDockerCredentialsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDockerCredentials200ApplicationJsonObject?: GetDockerCredentials200ApplicationJson;

  @Metadata()
  getDockerCredentials401ApplicationJsonObject?: GetDockerCredentials401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
