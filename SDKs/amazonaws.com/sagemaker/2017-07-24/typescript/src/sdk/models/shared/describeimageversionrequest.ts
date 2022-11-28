import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeImageVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ImageName" })
  imageName: string;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: number;
}
