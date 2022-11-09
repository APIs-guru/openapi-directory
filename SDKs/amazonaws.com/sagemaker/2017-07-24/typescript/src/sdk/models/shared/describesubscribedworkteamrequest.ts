import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeSubscribedWorkteamRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=WorkteamArn" })
  workteamArn: string;
}
