import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeServerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ServerId" })
  serverId: string;
}
