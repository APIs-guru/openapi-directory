import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatasetGroupSummary } from "./datasetgroupsummary";



export class ListDatasetGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datasetGroups", elemType: DatasetGroupSummary })
  datasetGroups?: DatasetGroupSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
