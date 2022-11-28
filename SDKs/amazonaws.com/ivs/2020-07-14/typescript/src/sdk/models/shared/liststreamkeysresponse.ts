import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StreamKeySummary } from "./streamkeysummary";



export class ListStreamKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=streamKeys", elemType: StreamKeySummary })
  streamKeys: StreamKeySummary[];
}
