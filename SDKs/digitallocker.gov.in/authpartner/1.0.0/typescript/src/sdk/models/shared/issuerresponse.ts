import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class IssuerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=issuers" })
  issuers: any[];
}
