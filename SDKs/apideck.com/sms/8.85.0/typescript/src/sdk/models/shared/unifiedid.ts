import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UnifiedId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}
