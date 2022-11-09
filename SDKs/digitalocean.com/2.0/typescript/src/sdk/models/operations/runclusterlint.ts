import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RunClusterlintPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=cluster_id" })
  clusterId: string;
}


export class RunClusterlintRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=exclude_checks" })
  excludeChecks?: string[];

  @Metadata({ data: "json, name=exclude_groups" })
  excludeGroups?: string[];

  @Metadata({ data: "json, name=include_checks" })
  includeChecks?: string[];

  @Metadata({ data: "json, name=include_groups" })
  includeGroups?: string[];
}


export class RunClusterlintRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RunClusterlintPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: RunClusterlintRequestBody;
}


export class RunClusterlint401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class RunClusterlintResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  runClusterlint202ApplicationJsonAny?: any;

  @Metadata()
  runClusterlint401ApplicationJsonObject?: RunClusterlint401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
