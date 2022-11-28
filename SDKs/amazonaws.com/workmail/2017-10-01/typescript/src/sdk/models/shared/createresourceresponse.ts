import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId?: string;
}
