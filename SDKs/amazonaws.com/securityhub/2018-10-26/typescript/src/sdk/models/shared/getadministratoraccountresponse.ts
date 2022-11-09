import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Invitation } from "./invitation";


export class GetAdministratorAccountResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Administrator" })
  administrator?: Invitation;
}
