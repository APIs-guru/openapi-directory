import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IntentMetadata } from "./intentmetadata";



export class GetIntentVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=intents", elemType: IntentMetadata })
  intents?: IntentMetadata[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
