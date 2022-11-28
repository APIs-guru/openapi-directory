import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Protection } from "./protection";



export class DescribeProtectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Protection" })
  protection?: Protection;
}
