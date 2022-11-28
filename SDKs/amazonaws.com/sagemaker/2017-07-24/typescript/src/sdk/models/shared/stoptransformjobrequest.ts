import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopTransformJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TransformJobName" })
  transformJobName: string;
}
