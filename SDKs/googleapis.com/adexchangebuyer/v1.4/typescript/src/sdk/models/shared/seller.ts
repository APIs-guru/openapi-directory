import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Seller extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=subAccountId" })
  subAccountId?: string;
}
