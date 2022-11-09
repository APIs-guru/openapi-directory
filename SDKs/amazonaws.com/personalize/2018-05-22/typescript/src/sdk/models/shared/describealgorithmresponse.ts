import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Algorithm } from "./algorithm";


export class DescribeAlgorithmResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=algorithm" })
  algorithm?: Algorithm;
}
