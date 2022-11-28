import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeploymentConfig } from "./deploymentconfig";
import { VariantProperty } from "./variantproperty";



export class UpdateEndpointInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeploymentConfig" })
  deploymentConfig?: DeploymentConfig;

  @SpeakeasyMetadata({ data: "json, name=EndpointConfigName" })
  endpointConfigName: string;

  @SpeakeasyMetadata({ data: "json, name=EndpointName" })
  endpointName: string;

  @SpeakeasyMetadata({ data: "json, name=ExcludeRetainedVariantProperties", elemType: VariantProperty })
  excludeRetainedVariantProperties?: VariantProperty[];

  @SpeakeasyMetadata({ data: "json, name=RetainAllVariantProperties" })
  retainAllVariantProperties?: boolean;
}
