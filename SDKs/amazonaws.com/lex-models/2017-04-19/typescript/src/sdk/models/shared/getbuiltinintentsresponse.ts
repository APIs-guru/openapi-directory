import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BuiltinIntentMetadata } from "./builtinintentmetadata";


export class GetBuiltinIntentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=intents", elemType: shared.BuiltinIntentMetadata })
  intents?: BuiltinIntentMetadata[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
