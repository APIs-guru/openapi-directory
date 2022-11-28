import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ModelPackageGroupSummary } from "./modelpackagegroupsummary";



export class ListModelPackageGroupsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ModelPackageGroupSummaryList", elemType: ModelPackageGroupSummary })
  modelPackageGroupSummaryList: ModelPackageGroupSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
