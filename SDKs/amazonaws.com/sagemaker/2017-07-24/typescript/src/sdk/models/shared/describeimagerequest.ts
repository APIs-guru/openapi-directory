import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeImageRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ImageName" })
  imageName: string;
}
