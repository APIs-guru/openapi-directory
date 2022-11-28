import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SparkOptions
/** 
 * Options for a user-defined Spark routine.
**/
export class SparkOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=archiveUris" })
  archiveUris?: string[];

  @SpeakeasyMetadata({ data: "json, name=connection" })
  connection?: string;

  @SpeakeasyMetadata({ data: "json, name=containerImage" })
  containerImage?: string;

  @SpeakeasyMetadata({ data: "json, name=fileUris" })
  fileUris?: string[];

  @SpeakeasyMetadata({ data: "json, name=jarUris" })
  jarUris?: string[];

  @SpeakeasyMetadata({ data: "json, name=mainFileUri" })
  mainFileUri?: string;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=pyFileUris" })
  pyFileUris?: string[];

  @SpeakeasyMetadata({ data: "json, name=runtimeVersion" })
  runtimeVersion?: string;
}
