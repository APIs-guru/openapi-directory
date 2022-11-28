import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeStackProvisioningParametersResult
/** 
 * Contains the response to a <code>DescribeStackProvisioningParameters</code> request.
**/
export class DescribeStackProvisioningParametersResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AgentInstallerUrl" })
  agentInstallerUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=Parameters" })
  parameters?: Map<string, string>;
}
