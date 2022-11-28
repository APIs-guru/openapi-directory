import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EngineVersionInfo
/** 
 * Provides details of the Redis engine version
**/
export class EngineVersionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EnginePatchVersion" })
  enginePatchVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=EngineVersion" })
  engineVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=ParameterGroupFamily" })
  parameterGroupFamily?: string;
}
