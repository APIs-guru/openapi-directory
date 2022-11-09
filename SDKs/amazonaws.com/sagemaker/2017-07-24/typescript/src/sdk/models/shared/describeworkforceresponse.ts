import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Workforce } from "./workforce";


export class DescribeWorkforceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Workforce" })
  workforce: Workforce;
}
