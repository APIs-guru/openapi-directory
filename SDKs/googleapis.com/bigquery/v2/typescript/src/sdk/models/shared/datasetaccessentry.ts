import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatasetReference } from "./datasetreference";


export enum DatasetAccessEntryTargetTypesEnum {
    TargetTypeUnspecified = "TARGET_TYPE_UNSPECIFIED",
    Views = "VIEWS",
    Routines = "ROUTINES"
}


export class DatasetAccessEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataset" })
  dataset?: DatasetReference;

  @SpeakeasyMetadata({ data: "json, name=targetTypes" })
  targetTypes?: DatasetAccessEntryTargetTypesEnum[];
}
