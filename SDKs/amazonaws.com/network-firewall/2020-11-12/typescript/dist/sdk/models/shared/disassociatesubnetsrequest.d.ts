import { SpeakeasyBase } from "../../../internal/utils";
export declare class DisassociateSubnetsRequest extends SpeakeasyBase {
    firewallArn?: string;
    firewallName?: string;
    subnetIds: string[];
    updateToken?: string;
}
