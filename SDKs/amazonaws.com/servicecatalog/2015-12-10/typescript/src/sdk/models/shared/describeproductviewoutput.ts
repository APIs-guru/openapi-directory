import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProductViewSummary } from "./productviewsummary";
import { ProvisioningArtifact } from "./provisioningartifact";


export class DescribeProductViewOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProductViewSummary" })
  productViewSummary?: ProductViewSummary;

  @Metadata({ data: "json, name=ProvisioningArtifacts", elemType: shared.ProvisioningArtifact })
  provisioningArtifacts?: ProvisioningArtifact[];
}
