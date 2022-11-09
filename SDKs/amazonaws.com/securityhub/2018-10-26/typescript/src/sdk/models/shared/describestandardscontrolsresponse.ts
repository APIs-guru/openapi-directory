import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StandardsControl } from "./standardscontrol";


export class DescribeStandardsControlsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Controls", elemType: shared.StandardsControl })
  controls?: StandardsControl[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
