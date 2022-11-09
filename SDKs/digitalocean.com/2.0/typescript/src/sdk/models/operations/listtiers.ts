import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListTiers200ApplicationJsonTiers extends SpeakeasyBase {
  @Metadata({ data: "json, name=build_seconds" })
  buildSeconds?: string;

  @Metadata({ data: "json, name=egress_bandwidth_bytes" })
  egressBandwidthBytes?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=slug" })
  slug?: string;

  @Metadata({ data: "json, name=storage_bytes" })
  storageBytes?: string;
}


export class ListTiers200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=tiers", elemType: operations.ListTiers200ApplicationJsonTiers })
  tiers?: ListTiers200ApplicationJsonTiers[];
}


export class ListTiers401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListTiersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  listTiers200ApplicationJsonObject?: ListTiers200ApplicationJson;

  @Metadata()
  listTiers401ApplicationJsonObject?: ListTiers401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
