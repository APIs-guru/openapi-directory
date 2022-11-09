import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetHitRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=HITId" })
  hitId: string;
}
