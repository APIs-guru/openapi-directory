import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeServerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ServerId" })
  serverId: string;
}
