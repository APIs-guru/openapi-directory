import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateHitTypeOfHitRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=HITId" })
  hitId: string;

  @Metadata({ data: "json, name=HITTypeId" })
  hitTypeId: string;
}
