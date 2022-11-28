import { SpeakeasyBase } from "../../../internal/utils";
import { StaticIp } from "./staticip";
export declare class GetStaticIpsResult extends SpeakeasyBase {
    nextPageToken?: string;
    staticIps?: StaticIp[];
}
