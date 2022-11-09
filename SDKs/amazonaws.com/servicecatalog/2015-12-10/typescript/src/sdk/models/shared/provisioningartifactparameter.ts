import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ParameterConstraints } from "./parameterconstraints";


// ProvisioningArtifactParameter
/** 
 * Information about a parameter used to provision a product.
**/
export class ProvisioningArtifactParameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=DefaultValue" })
  defaultValue?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=IsNoEcho" })
  isNoEcho?: boolean;

  @Metadata({ data: "json, name=ParameterConstraints" })
  parameterConstraints?: ParameterConstraints;

  @Metadata({ data: "json, name=ParameterKey" })
  parameterKey?: string;

  @Metadata({ data: "json, name=ParameterType" })
  parameterType?: string;
}
