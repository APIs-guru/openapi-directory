import { SpeakeasyBase } from "../../../internal/utils/utils";
import { BudgetDetail } from "./budgetdetail";
import { ProductViewDetail } from "./productviewdetail";
import { ProvisioningArtifactSummary } from "./provisioningartifactsummary";
import { TagOptionDetail } from "./tagoptiondetail";
import { Tag } from "./tag";
export declare class DescribeProductAsAdminOutput extends SpeakeasyBase {
    budgets?: BudgetDetail[];
    productViewDetail?: ProductViewDetail;
    provisioningArtifactSummaries?: ProvisioningArtifactSummary[];
    tagOptions?: TagOptionDetail[];
    tags?: Tag[];
}
