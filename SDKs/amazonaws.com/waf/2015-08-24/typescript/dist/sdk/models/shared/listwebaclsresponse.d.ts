import { SpeakeasyBase } from "../../../internal/utils/utils";
import { WebAclSummary } from "./webaclsummary";
export declare class ListWebAcLsResponse extends SpeakeasyBase {
    nextMarker?: string;
    webAcLs?: WebAclSummary[];
}
