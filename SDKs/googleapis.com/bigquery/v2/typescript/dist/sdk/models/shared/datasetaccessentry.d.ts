import { SpeakeasyBase } from "../../../internal/utils";
import { DatasetReference } from "./datasetreference";
export declare enum DatasetAccessEntryTargetTypesEnum {
    TargetTypeUnspecified = "TARGET_TYPE_UNSPECIFIED",
    Views = "VIEWS",
    Routines = "ROUTINES"
}
export declare class DatasetAccessEntry extends SpeakeasyBase {
    dataset?: DatasetReference;
    targetTypes?: DatasetAccessEntryTargetTypesEnum[];
}
