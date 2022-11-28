import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteHitRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HITId" })
  hitId: string;
}
