import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetHitRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HITId" })
  hitId: string;
}
