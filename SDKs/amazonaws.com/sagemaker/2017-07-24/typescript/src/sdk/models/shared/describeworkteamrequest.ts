import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeWorkteamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=WorkteamName" })
  workteamName: string;
}
