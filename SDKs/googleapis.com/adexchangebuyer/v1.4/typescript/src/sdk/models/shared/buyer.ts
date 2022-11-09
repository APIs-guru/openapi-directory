import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Buyer extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;
}
