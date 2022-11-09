import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ModelPackageGroupSummary } from "./modelpackagegroupsummary";


export class ListModelPackageGroupsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ModelPackageGroupSummaryList", elemType: shared.ModelPackageGroupSummary })
  modelPackageGroupSummaryList: ModelPackageGroupSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
