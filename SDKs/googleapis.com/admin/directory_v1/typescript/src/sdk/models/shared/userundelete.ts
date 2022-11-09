import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UserUndelete extends SpeakeasyBase {
  @Metadata({ data: "json, name=orgUnitPath" })
  orgUnitPath?: string;
}
