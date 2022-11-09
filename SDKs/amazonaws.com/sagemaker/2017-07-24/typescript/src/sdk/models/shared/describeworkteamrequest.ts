import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeWorkteamRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=WorkteamName" })
  workteamName: string;
}
