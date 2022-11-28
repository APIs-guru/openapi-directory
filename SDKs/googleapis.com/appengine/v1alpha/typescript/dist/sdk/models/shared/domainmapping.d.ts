import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceRecord } from "./resourcerecord";
import { SslSettings } from "./sslsettings";
/**
 * A domain serving an App Engine application.
**/
export declare class DomainMapping extends SpeakeasyBase {
    id?: string;
    name?: string;
    resourceRecords?: ResourceRecord[];
    sslSettings?: SslSettings;
}
