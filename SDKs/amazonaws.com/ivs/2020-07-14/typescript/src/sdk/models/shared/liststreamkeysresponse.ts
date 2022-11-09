import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StreamKeySummary } from "./streamkeysummary";


export class ListStreamKeysResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=streamKeys", elemType: shared.StreamKeySummary })
  streamKeys: StreamKeySummary[];
}
