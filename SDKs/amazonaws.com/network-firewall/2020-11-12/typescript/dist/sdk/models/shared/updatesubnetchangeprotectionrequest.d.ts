import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateSubnetChangeProtectionRequest extends SpeakeasyBase {
    firewallArn?: string;
    firewallName?: string;
    subnetChangeProtection: boolean;
    updateToken?: string;
}
