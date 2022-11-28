import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationDetail } from "./applicationdetail";



export class RollbackApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationDetail" })
  applicationDetail: ApplicationDetail;
}
