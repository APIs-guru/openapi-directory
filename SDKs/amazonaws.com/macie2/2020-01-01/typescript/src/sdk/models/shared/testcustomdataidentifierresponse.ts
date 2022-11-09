import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TestCustomDataIdentifierResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=matchCount" })
  matchCount?: number;
}
