import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DatasetGroupSummary } from "./datasetgroupsummary";


export class ListDatasetGroupsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=datasetGroups", elemType: shared.DatasetGroupSummary })
  datasetGroups?: DatasetGroupSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
