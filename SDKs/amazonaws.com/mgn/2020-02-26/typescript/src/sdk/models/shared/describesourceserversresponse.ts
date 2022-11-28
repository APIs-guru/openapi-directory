import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourceServer } from "./sourceserver";



export class DescribeSourceServersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: SourceServer })
  items?: SourceServer[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
