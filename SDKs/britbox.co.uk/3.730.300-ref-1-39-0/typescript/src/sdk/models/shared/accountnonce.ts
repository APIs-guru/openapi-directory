import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AccountNonce extends SpeakeasyBase {
  @Metadata({ data: "json, name=value" })
  value: string;
}
