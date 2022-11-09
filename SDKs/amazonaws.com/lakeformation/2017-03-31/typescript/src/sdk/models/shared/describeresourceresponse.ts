import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceInfo } from "./resourceinfo";


export class DescribeResourceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceInfo" })
  resourceInfo?: ResourceInfo;
}
