import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeregisterResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceArn" })
  resourceArn: string;
}
