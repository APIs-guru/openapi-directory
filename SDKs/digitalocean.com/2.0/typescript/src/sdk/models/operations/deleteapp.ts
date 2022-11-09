import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteAppPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteAppRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteAppPathParams;
}


export class DeleteApp200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;
}


export class DeleteApp401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class DeleteAppResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteApp200ApplicationJsonObject?: DeleteApp200ApplicationJson;

  @Metadata()
  deleteApp401ApplicationJsonObject?: DeleteApp401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
