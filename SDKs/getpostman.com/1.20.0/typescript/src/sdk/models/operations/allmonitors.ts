import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AllMonitors200ApplicationJsonMonitors extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=owner" })
  owner?: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}


export class AllMonitors200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=monitors", elemType: operations.AllMonitors200ApplicationJsonMonitors })
  monitors?: AllMonitors200ApplicationJsonMonitors[];
}


export class AllMonitorsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  allMonitors200ApplicationJsonObject?: AllMonitors200ApplicationJson;
}
