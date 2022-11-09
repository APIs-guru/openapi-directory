import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ComputeEnum } from "./computeenum";
import { RunningModeEnum } from "./runningmodeenum";


// WorkspaceProperties
/** 
 * Describes a WorkSpace.
**/
export class WorkspaceProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=ComputeTypeName" })
  computeTypeName?: ComputeEnum;

  @Metadata({ data: "json, name=RootVolumeSizeGib" })
  rootVolumeSizeGib?: number;

  @Metadata({ data: "json, name=RunningMode" })
  runningMode?: RunningModeEnum;

  @Metadata({ data: "json, name=RunningModeAutoStopTimeoutInMinutes" })
  runningModeAutoStopTimeoutInMinutes?: number;

  @Metadata({ data: "json, name=UserVolumeSizeGib" })
  userVolumeSizeGib?: number;
}
