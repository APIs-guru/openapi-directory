import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ModelPackageSummary } from "./modelpackagesummary";



export class ListModelPackagesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ModelPackageSummaryList", elemType: ModelPackageSummary })
  modelPackageSummaryList: ModelPackageSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
