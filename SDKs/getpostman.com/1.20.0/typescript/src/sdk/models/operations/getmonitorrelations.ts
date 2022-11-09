import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetMonitorRelationsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiVersionId" })
  apiVersionId: string;
}


export class GetMonitorRelationsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMonitorRelationsPathParams;
}


export class GetMonitorRelations200ApplicationJsonMonitor extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=monitorId" })
  monitorId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: string;
}


export class GetMonitorRelations200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=monitor", elemType: operations.GetMonitorRelations200ApplicationJsonMonitor })
  monitor?: GetMonitorRelations200ApplicationJsonMonitor[];
}


export class GetMonitorRelationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getMonitorRelations200ApplicationJsonObject?: GetMonitorRelations200ApplicationJson;
}
