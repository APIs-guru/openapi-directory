import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GcrDestination } from "./gcrdestination";
import { GcsDestination } from "./gcsdestination";


// ModelExportOutputConfig
/** 
 * Output configuration for ModelExport Action.
**/
export class ModelExportOutputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=gcrDestination" })
  gcrDestination?: GcrDestination;

  @Metadata({ data: "json, name=gcsDestination" })
  gcsDestination?: GcsDestination;

  @Metadata({ data: "json, name=modelFormat" })
  modelFormat?: string;

  @Metadata({ data: "json, name=params" })
  params?: Map<string, string>;
}
