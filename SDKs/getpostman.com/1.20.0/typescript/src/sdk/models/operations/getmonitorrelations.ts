import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMonitorRelationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiVersionId" })
  apiVersionId: string;
}


export class GetMonitorRelations200ApplicationJsonMonitor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=monitorId" })
  monitorId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: string;
}


export class GetMonitorRelations200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=monitor", elemType: GetMonitorRelations200ApplicationJsonMonitor })
  monitor?: GetMonitorRelations200ApplicationJsonMonitor[];
}


export class GetMonitorRelationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMonitorRelationsPathParams;
}


export class GetMonitorRelationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getMonitorRelations200ApplicationJsonObject?: GetMonitorRelations200ApplicationJson;
}
