import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ModelPackageSummary } from "./modelpackagesummary";


export class ListModelPackagesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ModelPackageSummaryList", elemType: shared.ModelPackageSummary })
  modelPackageSummaryList: ModelPackageSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
