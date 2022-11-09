import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ProductViewSummary } from "./productviewsummary";
import { ProvisioningArtifact } from "./provisioningartifact";
export declare class DescribeProductViewOutput extends SpeakeasyBase {
    productViewSummary?: ProductViewSummary;
    provisioningArtifacts?: ProvisioningArtifact[];
}
