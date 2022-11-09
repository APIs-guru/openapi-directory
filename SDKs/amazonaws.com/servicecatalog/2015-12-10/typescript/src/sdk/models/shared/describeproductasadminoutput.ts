import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BudgetDetail } from "./budgetdetail";
import { ProductViewDetail } from "./productviewdetail";
import { ProvisioningArtifactSummary } from "./provisioningartifactsummary";
import { TagOptionDetail } from "./tagoptiondetail";
import { Tag } from "./tag";


export class DescribeProductAsAdminOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Budgets", elemType: shared.BudgetDetail })
  budgets?: BudgetDetail[];

  @Metadata({ data: "json, name=ProductViewDetail" })
  productViewDetail?: ProductViewDetail;

  @Metadata({ data: "json, name=ProvisioningArtifactSummaries", elemType: shared.ProvisioningArtifactSummary })
  provisioningArtifactSummaries?: ProvisioningArtifactSummary[];

  @Metadata({ data: "json, name=TagOptions", elemType: shared.TagOptionDetail })
  tagOptions?: TagOptionDetail[];

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
