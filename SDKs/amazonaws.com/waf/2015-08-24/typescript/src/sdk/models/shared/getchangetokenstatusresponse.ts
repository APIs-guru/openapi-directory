import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChangeTokenStatusEnum } from "./changetokenstatusenum";


export class GetChangeTokenStatusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeTokenStatus" })
  changeTokenStatus?: ChangeTokenStatusEnum;
}
