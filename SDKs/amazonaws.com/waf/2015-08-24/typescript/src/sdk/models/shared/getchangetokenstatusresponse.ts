import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChangeTokenStatusEnum } from "./changetokenstatusenum";



export class GetChangeTokenStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeTokenStatus" })
  changeTokenStatus?: ChangeTokenStatusEnum;
}
