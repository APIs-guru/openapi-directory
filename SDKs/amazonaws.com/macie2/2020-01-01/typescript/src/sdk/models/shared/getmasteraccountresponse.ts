import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Invitation } from "./invitation";


export class GetMasterAccountResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=master" })
  master?: Invitation;
}
