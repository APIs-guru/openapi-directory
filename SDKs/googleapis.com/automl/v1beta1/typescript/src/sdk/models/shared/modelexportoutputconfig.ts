import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GcrDestination } from "./gcrdestination";
import { GcsDestination } from "./gcsdestination";



// ModelExportOutputConfig
/** 
 * Output configuration for ModelExport Action.
**/
export class ModelExportOutputConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gcrDestination" })
  gcrDestination?: GcrDestination;

  @SpeakeasyMetadata({ data: "json, name=gcsDestination" })
  gcsDestination?: GcsDestination;

  @SpeakeasyMetadata({ data: "json, name=modelFormat" })
  modelFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=params" })
  params?: Map<string, string>;
}
