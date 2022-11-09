import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class IssuerResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=issuers" })
  issuers: any[];
}
