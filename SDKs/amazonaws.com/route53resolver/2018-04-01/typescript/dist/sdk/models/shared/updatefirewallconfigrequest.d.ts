import { SpeakeasyBase } from "../../../internal/utils";
import { FirewallFailOpenStatusEnum } from "./firewallfailopenstatusenum";
export declare class UpdateFirewallConfigRequest extends SpeakeasyBase {
    firewallFailOpen: FirewallFailOpenStatusEnum;
    resourceId: string;
}
