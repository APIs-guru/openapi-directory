import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceInfo } from "./resourceinfo";



export class DescribeResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceInfo" })
  resourceInfo?: ResourceInfo;
}
