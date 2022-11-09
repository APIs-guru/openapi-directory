import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeAccessRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExternalId" })
  externalId: string;

  @Metadata({ data: "json, name=ServerId" })
  serverId: string;
}
