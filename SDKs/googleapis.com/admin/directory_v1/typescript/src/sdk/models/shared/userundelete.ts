import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserUndelete extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=orgUnitPath" })
  orgUnitPath?: string;
}
