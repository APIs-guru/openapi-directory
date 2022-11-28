import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Algorithm } from "./algorithm";



export class DescribeAlgorithmResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=algorithm" })
  algorithm?: Algorithm;
}
