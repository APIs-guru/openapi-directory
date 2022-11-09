import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DatasetReference } from "./datasetreference";

export enum DatasetAccessEntryTargetTypesEnum {
    TargetTypeUnspecified = "TARGET_TYPE_UNSPECIFIED"
,    Views = "VIEWS"
}


export class DatasetAccessEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataset" })
  dataset?: DatasetReference;

  @Metadata({ data: "json, name=targetTypes" })
  targetTypes?: DatasetAccessEntryTargetTypesEnum[];
}
