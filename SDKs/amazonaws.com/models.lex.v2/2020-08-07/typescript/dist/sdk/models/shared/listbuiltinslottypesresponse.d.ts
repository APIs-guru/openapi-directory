import { SpeakeasyBase } from "../../../internal/utils";
import { BuiltInSlotTypeSummary } from "./builtinslottypesummary";
export declare class ListBuiltInSlotTypesResponse extends SpeakeasyBase {
    builtInSlotTypeSummaries?: BuiltInSlotTypeSummary[];
    localeId?: string;
    nextToken?: string;
}
