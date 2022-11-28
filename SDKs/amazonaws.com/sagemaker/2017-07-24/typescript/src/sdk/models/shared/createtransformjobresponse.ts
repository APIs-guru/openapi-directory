import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateTransformJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TransformJobArn" })
  transformJobArn: string;
}
