import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BuiltinIntentMetadata } from "./builtinintentmetadata";



export class GetBuiltinIntentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=intents", elemType: BuiltinIntentMetadata })
  intents?: BuiltinIntentMetadata[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
