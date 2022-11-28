import { SpeakeasyBase } from "../../../internal/utils";
import { ModelPackageSummary } from "./modelpackagesummary";
export declare class ListModelPackagesOutput extends SpeakeasyBase {
    modelPackageSummaryList: ModelPackageSummary[];
    nextToken?: string;
}
