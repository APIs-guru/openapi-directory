import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BuiltInIntentSummary } from "./builtinintentsummary";



export class ListBuiltInIntentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=builtInIntentSummaries", elemType: BuiltInIntentSummary })
  builtInIntentSummaries?: BuiltInIntentSummary[];

  @SpeakeasyMetadata({ data: "json, name=localeId" })
  localeId?: string;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
