import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DestroyWithAssociatedResourcesDangerousPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=droplet_id" })
  dropletId: number;
}


export class DestroyWithAssociatedResourcesDangerousHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Dangerous" })
  xDangerous: boolean;
}


export class DestroyWithAssociatedResourcesDangerousRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DestroyWithAssociatedResourcesDangerousPathParams;

  @Metadata()
  headers: DestroyWithAssociatedResourcesDangerousHeaders;
}


export class DestroyWithAssociatedResourcesDangerous401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class DestroyWithAssociatedResourcesDangerousResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  destroyWithAssociatedResourcesDangerous401ApplicationJsonObject?: DestroyWithAssociatedResourcesDangerous401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
