import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutInventoryResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}
