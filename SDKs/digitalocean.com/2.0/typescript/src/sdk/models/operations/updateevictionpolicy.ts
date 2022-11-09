import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateEvictionPolicyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=database_cluster_uuid" })
  databaseClusterUuid: string;
}


export class UpdateEvictionPolicyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateEvictionPolicyPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Onev21databases1Percent7BdatabaseClusterUuidPercent7D1evictionPolicyGetResponses200ContentApplication1jsonSchema;
}


export class UpdateEvictionPolicy401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class UpdateEvictionPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateEvictionPolicy401ApplicationJsonObject?: UpdateEvictionPolicy401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
