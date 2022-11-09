import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeregisterResourceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceArn" })
  resourceArn: string;
}
