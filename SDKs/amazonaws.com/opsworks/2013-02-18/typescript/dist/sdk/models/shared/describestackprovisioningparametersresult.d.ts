import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the response to a <code>DescribeStackProvisioningParameters</code> request.
**/
export declare class DescribeStackProvisioningParametersResult extends SpeakeasyBase {
    agentInstallerUrl?: string;
    parameters?: Map<string, string>;
}
