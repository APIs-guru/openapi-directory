import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ImageName" })
  imageName: string;
}
