import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PostureDetail } from "./posturedetail";


export enum SecurityPostureDevicePostureEnum {
    PostureUnspecified = "POSTURE_UNSPECIFIED",
    Secure = "SECURE",
    AtRisk = "AT_RISK",
    PotentiallyCompromised = "POTENTIALLY_COMPROMISED"
}


// SecurityPosture
/** 
 * The security posture of the device, as determined by the current device state and the policies applied.
**/
export class SecurityPosture extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=devicePosture" })
  devicePosture?: SecurityPostureDevicePostureEnum;

  @SpeakeasyMetadata({ data: "json, name=postureDetails", elemType: PostureDetail })
  postureDetails?: PostureDetail[];
}
