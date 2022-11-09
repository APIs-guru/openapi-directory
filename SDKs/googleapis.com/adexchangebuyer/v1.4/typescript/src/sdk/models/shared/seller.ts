import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Seller extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=subAccountId" })
  subAccountId?: string;
}
