import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Workforce } from "./workforce";



export class DescribeWorkforceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Workforce" })
  workforce: Workforce;
}
