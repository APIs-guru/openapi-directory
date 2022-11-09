import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Protection } from "./protection";


export class DescribeProtectionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Protection" })
  protection?: Protection;
}
