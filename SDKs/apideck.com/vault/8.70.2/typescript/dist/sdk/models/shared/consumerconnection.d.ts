import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthTypeEnum } from "./authtypeenum";
export declare enum ConsumerConnectionStateEnum {
    Available = "available",
    Callable = "callable",
    Added = "added",
    Configured = "configured",
    Authorized = "authorized"
}
export declare class ConsumerConnection extends SpeakeasyBase {
    authType?: AuthTypeEnum;
    consumerId?: string;
    createdAt?: string;
    enabled?: boolean;
    icon?: string;
    id?: string;
    logo?: string;
    metadata?: Map<string, any>;
    name?: string;
    serviceId?: string;
    settings?: Map<string, any>;
    state?: ConsumerConnectionStateEnum;
    tagLine?: string;
    unifiedApi?: string;
    updatedAt?: string;
    website?: string;
}
