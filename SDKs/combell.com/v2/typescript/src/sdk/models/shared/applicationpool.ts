import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApplicationPool
/** 
 * The application pool for the hosting account.
**/
export class ApplicationPool extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=installed_net_core_runtimes" })
  installedNetCoreRuntimes?: string[];

  @SpeakeasyMetadata({ data: "json, name=pipeline_mode" })
  pipelineMode?: string;

  @SpeakeasyMetadata({ data: "json, name=runtime" })
  runtime?: string;
}
