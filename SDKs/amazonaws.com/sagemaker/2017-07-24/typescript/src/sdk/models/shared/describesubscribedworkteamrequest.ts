import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeSubscribedWorkteamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=WorkteamArn" })
  workteamArn: string;
}
