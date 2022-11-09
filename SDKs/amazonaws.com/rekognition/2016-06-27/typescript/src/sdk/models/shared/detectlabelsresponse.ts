import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Label } from "./label";
import { OrientationCorrectionEnum } from "./orientationcorrectionenum";


export class DetectLabelsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=LabelModelVersion" })
  labelModelVersion?: string;

  @Metadata({ data: "json, name=Labels", elemType: shared.Label })
  labels?: Label[];

  @Metadata({ data: "json, name=OrientationCorrection" })
  orientationCorrection?: OrientationCorrectionEnum;
}
