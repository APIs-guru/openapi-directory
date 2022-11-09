import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BuiltInSlotTypeSummary } from "./builtinslottypesummary";


export class ListBuiltInSlotTypesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=builtInSlotTypeSummaries", elemType: shared.BuiltInSlotTypeSummary })
  builtInSlotTypeSummaries?: BuiltInSlotTypeSummary[];

  @Metadata({ data: "json, name=localeId" })
  localeId?: string;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
