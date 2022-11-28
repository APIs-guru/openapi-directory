import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BudgetDetail } from "./budgetdetail";
import { ProductViewDetail } from "./productviewdetail";
import { ProvisioningArtifactSummary } from "./provisioningartifactsummary";
import { TagOptionDetail } from "./tagoptiondetail";
import { Tag } from "./tag";



export class DescribeProductAsAdminOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Budgets", elemType: BudgetDetail })
  budgets?: BudgetDetail[];

  @SpeakeasyMetadata({ data: "json, name=ProductViewDetail" })
  productViewDetail?: ProductViewDetail;

  @SpeakeasyMetadata({ data: "json, name=ProvisioningArtifactSummaries", elemType: ProvisioningArtifactSummary })
  provisioningArtifactSummaries?: ProvisioningArtifactSummary[];

  @SpeakeasyMetadata({ data: "json, name=TagOptions", elemType: TagOptionDetail })
  tagOptions?: TagOptionDetail[];

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
