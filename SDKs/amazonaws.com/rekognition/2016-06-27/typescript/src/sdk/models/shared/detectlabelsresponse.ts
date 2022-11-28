import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Label } from "./label";
import { OrientationCorrectionEnum } from "./orientationcorrectionenum";



export class DetectLabelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LabelModelVersion" })
  labelModelVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=Labels", elemType: Label })
  labels?: Label[];

  @SpeakeasyMetadata({ data: "json, name=OrientationCorrection" })
  orientationCorrection?: OrientationCorrectionEnum;
}
