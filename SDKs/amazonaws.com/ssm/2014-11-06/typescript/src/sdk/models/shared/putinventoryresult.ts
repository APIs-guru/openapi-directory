import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutInventoryResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
