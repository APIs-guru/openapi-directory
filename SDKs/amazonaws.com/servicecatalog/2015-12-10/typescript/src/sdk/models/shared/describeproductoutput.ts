import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BudgetDetail } from "./budgetdetail";
import { LaunchPath } from "./launchpath";
import { ProductViewSummary } from "./productviewsummary";
import { ProvisioningArtifact } from "./provisioningartifact";


export class DescribeProductOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Budgets", elemType: shared.BudgetDetail })
  budgets?: BudgetDetail[];

  @Metadata({ data: "json, name=LaunchPaths", elemType: shared.LaunchPath })
  launchPaths?: LaunchPath[];

  @Metadata({ data: "json, name=ProductViewSummary" })
  productViewSummary?: ProductViewSummary;

  @Metadata({ data: "json, name=ProvisioningArtifacts", elemType: shared.ProvisioningArtifact })
  provisioningArtifacts?: ProvisioningArtifact[];
}
