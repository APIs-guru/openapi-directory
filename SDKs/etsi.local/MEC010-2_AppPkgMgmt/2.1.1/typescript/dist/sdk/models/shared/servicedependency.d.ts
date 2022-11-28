import { SpeakeasyBase } from "../../../internal/utils";
import { TransportDependency } from "./transportdependency";
export declare class ServiceDependency extends SpeakeasyBase {
    requestedPermissions?: string[];
    serCategory?: any;
    serName: string;
    serTransportDependencies?: TransportDependency[];
    version: string;
}
