import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeAccessRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExternalId" })
  externalId: string;

  @SpeakeasyMetadata({ data: "json, name=ServerId" })
  serverId: string;
}
