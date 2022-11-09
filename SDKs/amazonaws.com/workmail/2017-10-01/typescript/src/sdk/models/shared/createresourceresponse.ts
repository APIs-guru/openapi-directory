import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateResourceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceId" })
  resourceId?: string;
}
