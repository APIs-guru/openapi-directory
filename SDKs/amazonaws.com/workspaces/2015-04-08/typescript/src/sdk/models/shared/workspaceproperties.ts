import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComputeEnum } from "./computeenum";
import { RunningModeEnum } from "./runningmodeenum";



// WorkspaceProperties
/** 
 * Describes a WorkSpace.
**/
export class WorkspaceProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComputeTypeName" })
  computeTypeName?: ComputeEnum;

  @SpeakeasyMetadata({ data: "json, name=RootVolumeSizeGib" })
  rootVolumeSizeGib?: number;

  @SpeakeasyMetadata({ data: "json, name=RunningMode" })
  runningMode?: RunningModeEnum;

  @SpeakeasyMetadata({ data: "json, name=RunningModeAutoStopTimeoutInMinutes" })
  runningModeAutoStopTimeoutInMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=UserVolumeSizeGib" })
  userVolumeSizeGib?: number;
}
