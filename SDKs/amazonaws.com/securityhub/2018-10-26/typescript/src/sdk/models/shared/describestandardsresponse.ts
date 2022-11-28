import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Standard } from "./standard";



export class DescribeStandardsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Standards", elemType: Standard })
  standards?: Standard[];
}
