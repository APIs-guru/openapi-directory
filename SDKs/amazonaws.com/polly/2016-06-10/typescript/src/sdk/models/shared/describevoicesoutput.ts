import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Voice } from "./voice";



export class DescribeVoicesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Voices", elemType: Voice })
  voices?: Voice[];
}
