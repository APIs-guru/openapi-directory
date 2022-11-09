import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCredentialsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=cluster_id" })
  clusterId: string;
}


export class GetCredentialsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=expiry_seconds" })
  expirySeconds?: number;
}


export class GetCredentialsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCredentialsPathParams;

  @Metadata()
  queryParams: GetCredentialsQueryParams;
}


export class GetCredentials200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificate_authority_data" })
  certificateAuthorityData?: string;

  @Metadata({ data: "json, name=client_certificate_data" })
  clientCertificateData?: string;

  @Metadata({ data: "json, name=client_key_data" })
  clientKeyData?: string;

  @Metadata({ data: "json, name=expires_at" })
  expiresAt?: Date;

  @Metadata({ data: "json, name=server" })
  server?: string;

  @Metadata({ data: "json, name=token" })
  token?: string;
}


export class GetCredentials401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetCredentialsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getCredentials200ApplicationJsonObject?: GetCredentials200ApplicationJson;

  @Metadata()
  getCredentials401ApplicationJsonObject?: GetCredentials401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
