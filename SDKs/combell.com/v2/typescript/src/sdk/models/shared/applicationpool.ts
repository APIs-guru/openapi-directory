import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApplicationPool
/** 
 * The application pool for the hosting account.
**/
export class ApplicationPool extends SpeakeasyBase {
  @Metadata({ data: "json, name=installed_net_core_runtimes" })
  installedNetCoreRuntimes?: string[];

  @Metadata({ data: "json, name=pipeline_mode" })
  pipelineMode?: string;

  @Metadata({ data: "json, name=runtime" })
  runtime?: string;
}
