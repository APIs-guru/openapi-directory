import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Invitation } from "./invitation";



export class GetAdministratorAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Administrator" })
  administrator?: Invitation;
}
