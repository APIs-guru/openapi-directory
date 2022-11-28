import { SpeakeasyBase } from "../../../internal/utils";
import { ListDevicePositionsResponseEntry } from "./listdevicepositionsresponseentry";
export declare class ListDevicePositionsResponse extends SpeakeasyBase {
    entries: ListDevicePositionsResponseEntry[];
    nextToken?: string;
}
