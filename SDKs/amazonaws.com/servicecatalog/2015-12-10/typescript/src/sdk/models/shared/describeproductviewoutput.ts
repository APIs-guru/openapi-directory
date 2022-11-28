import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductViewSummary } from "./productviewsummary";
import { ProvisioningArtifact } from "./provisioningartifact";



export class DescribeProductViewOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProductViewSummary" })
  productViewSummary?: ProductViewSummary;

  @SpeakeasyMetadata({ data: "json, name=ProvisioningArtifacts", elemType: ProvisioningArtifact })
  provisioningArtifacts?: ProvisioningArtifact[];
}
