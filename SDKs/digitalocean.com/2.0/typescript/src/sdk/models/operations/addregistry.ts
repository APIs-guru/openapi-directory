import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddRegistryRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=cluster_uuids" })
  clusterUuids?: string[];
}


export class AddRegistryRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: AddRegistryRequestBody;
}


export class AddRegistry401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class AddRegistryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  addRegistry401ApplicationJsonObject?: AddRegistry401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
