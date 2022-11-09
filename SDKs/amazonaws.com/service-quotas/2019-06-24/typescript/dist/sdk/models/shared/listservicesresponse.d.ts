import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceInfo } from "./serviceinfo";
export declare class ListServicesResponse extends SpeakeasyBase {
    nextToken?: string;
    services?: ServiceInfo[];
}
