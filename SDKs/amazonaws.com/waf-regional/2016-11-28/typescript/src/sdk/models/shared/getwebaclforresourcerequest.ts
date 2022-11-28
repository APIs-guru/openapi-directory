import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetWebAclForResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceArn" })
  resourceArn: string;
}
