import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListKubernetesOptions200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options?: any;
}


export class ListKubernetesOptions401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListKubernetesOptionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  listKubernetesOptions200ApplicationJsonObject?: ListKubernetesOptions200ApplicationJson;

  @Metadata()
  listKubernetesOptions401ApplicationJsonObject?: ListKubernetesOptions401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
