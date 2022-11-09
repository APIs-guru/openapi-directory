import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeImageVersionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ImageName" })
  imageName: string;

  @Metadata({ data: "json, name=Version" })
  version?: number;
}
