import { SpeakeasyBase } from "../../../internal/utils";
export declare class AllMonitors200ApplicationJsonMonitors extends SpeakeasyBase {
    id?: string;
    name?: string;
    owner?: string;
    uid?: string;
}
export declare class AllMonitors200ApplicationJson extends SpeakeasyBase {
    monitors?: AllMonitors200ApplicationJsonMonitors[];
}
export declare class AllMonitorsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    allMonitors200ApplicationJsonObject?: AllMonitors200ApplicationJson;
}
