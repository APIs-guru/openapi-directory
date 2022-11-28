import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StandardsControl } from "./standardscontrol";



export class DescribeStandardsControlsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Controls", elemType: StandardsControl })
  controls?: StandardsControl[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
