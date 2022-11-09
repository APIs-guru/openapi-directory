import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEvictionPolicyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=database_cluster_uuid" })
  databaseClusterUuid: string;
}


export class GetEvictionPolicyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEvictionPolicyPathParams;
}

export enum GetEvictionPolicy200ApplicationJsonEvictionPolicyEnum {
    Noeviction = "noeviction"
,    AllkeysLru = "allkeys_lru"
,    AllkeysRandom = "allkeys_random"
,    VolatileLru = "volatile_lru"
,    VolatileRandom = "volatile_random"
,    VolatileTtl = "volatile_ttl"
}


export class GetEvictionPolicy200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=eviction_policy" })
  evictionPolicy: GetEvictionPolicy200ApplicationJsonEvictionPolicyEnum;
}


export class GetEvictionPolicy401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetEvictionPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getEvictionPolicy200ApplicationJsonObject?: GetEvictionPolicy200ApplicationJson;

  @Metadata()
  getEvictionPolicy401ApplicationJsonObject?: GetEvictionPolicy401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
