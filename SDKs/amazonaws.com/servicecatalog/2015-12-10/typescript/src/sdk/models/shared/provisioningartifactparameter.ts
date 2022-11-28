import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParameterConstraints } from "./parameterconstraints";



// ProvisioningArtifactParameter
/** 
 * Information about a parameter used to provision a product.
**/
export class ProvisioningArtifactParameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DefaultValue" })
  defaultValue?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=IsNoEcho" })
  isNoEcho?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ParameterConstraints" })
  parameterConstraints?: ParameterConstraints;

  @SpeakeasyMetadata({ data: "json, name=ParameterKey" })
  parameterKey?: string;

  @SpeakeasyMetadata({ data: "json, name=ParameterType" })
  parameterType?: string;
}
