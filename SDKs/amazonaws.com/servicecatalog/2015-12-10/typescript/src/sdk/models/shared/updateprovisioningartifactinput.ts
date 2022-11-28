import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProvisioningArtifactGuidanceEnum } from "./provisioningartifactguidanceenum";



export class UpdateProvisioningArtifactInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=Active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Guidance" })
  guidance?: ProvisioningArtifactGuidanceEnum;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductId" })
  productId: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisioningArtifactId" })
  provisioningArtifactId: string;
}
