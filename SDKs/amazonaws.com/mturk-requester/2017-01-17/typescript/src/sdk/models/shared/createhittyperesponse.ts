import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateHitTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HITTypeId" })
  hitTypeId?: string;
}
