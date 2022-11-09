import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EngineVersionInfo
/** 
 * Provides details of the Redis engine version
**/
export class EngineVersionInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=EnginePatchVersion" })
  enginePatchVersion?: string;

  @Metadata({ data: "json, name=EngineVersion" })
  engineVersion?: string;

  @Metadata({ data: "json, name=ParameterGroupFamily" })
  parameterGroupFamily?: string;
}
