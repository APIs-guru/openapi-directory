import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProvisioningArtifactGuidanceEnum } from "./provisioningartifactguidanceenum";


export class UpdateProvisioningArtifactInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @Metadata({ data: "json, name=Active" })
  active?: boolean;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Guidance" })
  guidance?: ProvisioningArtifactGuidanceEnum;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=ProductId" })
  productId: string;

  @Metadata({ data: "json, name=ProvisioningArtifactId" })
  provisioningArtifactId: string;
}
