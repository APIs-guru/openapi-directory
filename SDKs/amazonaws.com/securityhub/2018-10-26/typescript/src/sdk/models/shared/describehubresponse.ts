import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeHubResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoEnableControls" })
  autoEnableControls?: boolean;

  @SpeakeasyMetadata({ data: "json, name=HubArn" })
  hubArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SubscribedAt" })
  subscribedAt?: string;
}
