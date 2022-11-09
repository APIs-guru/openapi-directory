import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateDatabaseFirewallPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=database_cluster_uuid" })
  databaseClusterUuid: string;
}


export class UpdateDatabaseFirewallRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=rules", elemType: shared.Onev21databases1Percent7BdatabaseClusterUuidPercent7D1firewallGetResponses200ContentApplication1jsonSchemaPropertiesRulesItems })
  rules?: shared.Onev21databases1Percent7BdatabaseClusterUuidPercent7D1firewallGetResponses200ContentApplication1jsonSchemaPropertiesRulesItems[];
}


export class UpdateDatabaseFirewallRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateDatabaseFirewallPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateDatabaseFirewallRequestBody;
}


export class UpdateDatabaseFirewall401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class UpdateDatabaseFirewallResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateDatabaseFirewall401ApplicationJsonObject?: UpdateDatabaseFirewall401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
