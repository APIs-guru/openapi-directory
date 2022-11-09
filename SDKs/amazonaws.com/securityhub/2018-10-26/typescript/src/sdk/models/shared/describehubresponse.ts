import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeHubResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoEnableControls" })
  autoEnableControls?: boolean;

  @Metadata({ data: "json, name=HubArn" })
  hubArn?: string;

  @Metadata({ data: "json, name=SubscribedAt" })
  subscribedAt?: string;
}
