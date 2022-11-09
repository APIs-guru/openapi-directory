import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateHitTypeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=HITTypeId" })
  hitTypeId?: string;
}
