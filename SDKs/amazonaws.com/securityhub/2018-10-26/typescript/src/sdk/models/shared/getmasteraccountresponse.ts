import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Invitation } from "./invitation";



export class GetMasterAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Master" })
  master?: Invitation;
}
