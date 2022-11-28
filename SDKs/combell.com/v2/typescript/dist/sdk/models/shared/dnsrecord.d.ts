import { SpeakeasyBase } from "../../../internal/utils";
export declare class DnsRecord extends SpeakeasyBase {
    content?: string;
    id?: string;
    port?: number;
    priority?: number;
    protocol?: string;
    recordName?: string;
    service?: string;
    target?: string;
    ttl?: number;
    type?: string;
    weight?: number;
}
