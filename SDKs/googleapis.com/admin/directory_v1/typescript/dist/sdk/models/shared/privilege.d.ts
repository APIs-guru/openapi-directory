import { SpeakeasyBase } from "../../../internal/utils";
export declare class Privilege extends SpeakeasyBase {
    childPrivileges?: Privilege[];
    etag?: string;
    isOuScopable?: boolean;
    kind?: string;
    privilegeName?: string;
    serviceId?: string;
    serviceName?: string;
}
