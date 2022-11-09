import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateCustomDataIdentifierResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=customDataIdentifierId" })
  customDataIdentifierId?: string;
}
