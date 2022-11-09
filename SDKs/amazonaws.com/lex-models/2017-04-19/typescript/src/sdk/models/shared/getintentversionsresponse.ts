import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IntentMetadata } from "./intentmetadata";


export class GetIntentVersionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=intents", elemType: shared.IntentMetadata })
  intents?: IntentMetadata[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
