import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateCustomDataIdentifierResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customDataIdentifierId" })
  customDataIdentifierId?: string;
}
