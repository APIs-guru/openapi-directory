import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PortalSummary } from "./portalsummary";
export declare class ListPortalsResponse extends SpeakeasyBase {
    nextToken?: string;
    portalSummaries?: PortalSummary[];
}
