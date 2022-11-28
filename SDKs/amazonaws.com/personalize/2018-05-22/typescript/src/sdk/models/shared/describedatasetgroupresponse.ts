import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatasetGroup } from "./datasetgroup";



export class DescribeDatasetGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datasetGroup" })
  datasetGroup?: DatasetGroup;
}
