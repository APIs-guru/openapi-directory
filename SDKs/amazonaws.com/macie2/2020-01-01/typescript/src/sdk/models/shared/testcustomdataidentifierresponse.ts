import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TestCustomDataIdentifierResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=matchCount" })
  matchCount?: number;
}
