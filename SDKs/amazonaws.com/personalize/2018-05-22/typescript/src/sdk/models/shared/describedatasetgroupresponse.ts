import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DatasetGroup } from "./datasetgroup";


export class DescribeDatasetGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=datasetGroup" })
  datasetGroup?: DatasetGroup;
}
