import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceInfo } from "./serviceinfo";
export declare class ListServicesResponse extends SpeakeasyBase {
    nextToken?: string;
    services?: ServiceInfo[];
}
