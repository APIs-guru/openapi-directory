import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateSshKeyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ssh_key_identifier" })
  sshKeyIdentifier: any;
}


export class UpdateSshKeyRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateSshKeyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateSshKeyPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateSshKeyRequestBody;
}


export class UpdateSshKey401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class UpdateSshKeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateSshKey200ApplicationJsonAny?: any;

  @Metadata()
  updateSshKey401ApplicationJsonObject?: UpdateSshKey401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
