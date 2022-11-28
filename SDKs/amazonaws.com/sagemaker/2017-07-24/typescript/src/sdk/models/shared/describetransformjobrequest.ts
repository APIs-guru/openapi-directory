import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeTransformJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TransformJobName" })
  transformJobName: string;
}
