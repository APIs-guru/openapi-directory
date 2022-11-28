import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AllMonitors200ApplicationJsonMonitors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: string;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;
}


export class AllMonitors200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=monitors", elemType: AllMonitors200ApplicationJsonMonitors })
  monitors?: AllMonitors200ApplicationJsonMonitors[];
}


export class AllMonitorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  allMonitors200ApplicationJsonObject?: AllMonitors200ApplicationJson;
}
