import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SparkOptions
/** 
 * Options for a user-defined Spark routine.
**/
export class SparkOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=archiveUris" })
  archiveUris?: string[];

  @Metadata({ data: "json, name=connection" })
  connection?: string;

  @Metadata({ data: "json, name=containerImage" })
  containerImage?: string;

  @Metadata({ data: "json, name=fileUris" })
  fileUris?: string[];

  @Metadata({ data: "json, name=jarUris" })
  jarUris?: string[];

  @Metadata({ data: "json, name=mainFileUri" })
  mainFileUri?: string;

  @Metadata({ data: "json, name=properties" })
  properties?: Map<string, string>;

  @Metadata({ data: "json, name=pyFileUris" })
  pyFileUris?: string[];

  @Metadata({ data: "json, name=runtimeVersion" })
  runtimeVersion?: string;
}
