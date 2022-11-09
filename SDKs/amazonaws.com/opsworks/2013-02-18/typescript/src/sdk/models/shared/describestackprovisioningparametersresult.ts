import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeStackProvisioningParametersResult
/** 
 * Contains the response to a <code>DescribeStackProvisioningParameters</code> request.
**/
export class DescribeStackProvisioningParametersResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=AgentInstallerUrl" })
  agentInstallerUrl?: string;

  @Metadata({ data: "json, name=Parameters" })
  parameters?: Map<string, string>;
}
