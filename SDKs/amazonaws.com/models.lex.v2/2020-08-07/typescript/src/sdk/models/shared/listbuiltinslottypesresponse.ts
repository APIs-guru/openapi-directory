import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BuiltInSlotTypeSummary } from "./builtinslottypesummary";



export class ListBuiltInSlotTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=builtInSlotTypeSummaries", elemType: BuiltInSlotTypeSummary })
  builtInSlotTypeSummaries?: BuiltInSlotTypeSummary[];

  @SpeakeasyMetadata({ data: "json, name=localeId" })
  localeId?: string;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
