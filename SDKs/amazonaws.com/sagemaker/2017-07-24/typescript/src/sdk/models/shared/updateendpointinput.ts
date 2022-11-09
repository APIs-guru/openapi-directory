import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeploymentConfig } from "./deploymentconfig";
import { VariantProperty } from "./variantproperty";


export class UpdateEndpointInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeploymentConfig" })
  deploymentConfig?: DeploymentConfig;

  @Metadata({ data: "json, name=EndpointConfigName" })
  endpointConfigName: string;

  @Metadata({ data: "json, name=EndpointName" })
  endpointName: string;

  @Metadata({ data: "json, name=ExcludeRetainedVariantProperties", elemType: shared.VariantProperty })
  excludeRetainedVariantProperties?: VariantProperty[];

  @Metadata({ data: "json, name=RetainAllVariantProperties" })
  retainAllVariantProperties?: boolean;
}
