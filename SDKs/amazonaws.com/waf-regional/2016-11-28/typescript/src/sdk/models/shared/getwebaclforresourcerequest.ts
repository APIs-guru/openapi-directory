import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetWebAclForResourceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceArn" })
  resourceArn: string;
}
