import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BuiltInIntentSummary } from "./builtinintentsummary";


export class ListBuiltInIntentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=builtInIntentSummaries", elemType: shared.BuiltInIntentSummary })
  builtInIntentSummaries?: BuiltInIntentSummary[];

  @Metadata({ data: "json, name=localeId" })
  localeId?: string;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
