import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetClusterlintResultsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=cluster_id" })
  clusterId: string;
}


export class GetClusterlintResultsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=run_id" })
  runId?: string;
}


export class GetClusterlintResultsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetClusterlintResultsPathParams;

  @Metadata()
  queryParams: GetClusterlintResultsQueryParams;
}


// GetClusterlintResults200ApplicationJsonDiagnosticsObject
/** 
 * Metadata about the Kubernetes API object the diagnostic is reported on.
**/
export class GetClusterlintResults200ApplicationJsonDiagnosticsObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=namespace" })
  namespace?: string;
}


export class GetClusterlintResults200ApplicationJsonDiagnostics extends SpeakeasyBase {
  @Metadata({ data: "json, name=check_name" })
  checkName?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=object" })
  object?: GetClusterlintResults200ApplicationJsonDiagnosticsObject;

  @Metadata({ data: "json, name=severity" })
  severity?: string;
}


export class GetClusterlintResults200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=completed_at" })
  completedAt?: Date;

  @Metadata({ data: "json, name=diagnostics", elemType: operations.GetClusterlintResults200ApplicationJsonDiagnostics })
  diagnostics?: GetClusterlintResults200ApplicationJsonDiagnostics[];

  @Metadata({ data: "json, name=requested_at" })
  requestedAt?: Date;

  @Metadata({ data: "json, name=run_id" })
  runId?: string;
}


export class GetClusterlintResults401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetClusterlintResultsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getClusterlintResults200ApplicationJsonObject?: GetClusterlintResults200ApplicationJson;

  @Metadata()
  getClusterlintResults401ApplicationJsonObject?: GetClusterlintResults401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
