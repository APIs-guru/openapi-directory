import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Buyer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;
}
