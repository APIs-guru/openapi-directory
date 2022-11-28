import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BudgetDetail } from "./budgetdetail";
import { LaunchPath } from "./launchpath";
import { ProductViewSummary } from "./productviewsummary";
import { ProvisioningArtifact } from "./provisioningartifact";



export class DescribeProductOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Budgets", elemType: BudgetDetail })
  budgets?: BudgetDetail[];

  @SpeakeasyMetadata({ data: "json, name=LaunchPaths", elemType: LaunchPath })
  launchPaths?: LaunchPath[];

  @SpeakeasyMetadata({ data: "json, name=ProductViewSummary" })
  productViewSummary?: ProductViewSummary;

  @SpeakeasyMetadata({ data: "json, name=ProvisioningArtifacts", elemType: ProvisioningArtifact })
  provisioningArtifacts?: ProvisioningArtifact[];
}
