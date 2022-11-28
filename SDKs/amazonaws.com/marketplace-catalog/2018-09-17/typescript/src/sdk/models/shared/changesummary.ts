import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Entity } from "./entity";
import { ErrorDetail } from "./errordetail";



// ChangeSummary
/** 
 * This object is a container for common summary information about the change. The summary doesn't contain the whole change structure.
**/
export class ChangeSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeName" })
  changeName?: string;

  @SpeakeasyMetadata({ data: "json, name=ChangeType" })
  changeType?: string;

  @SpeakeasyMetadata({ data: "json, name=Details" })
  details?: string;

  @SpeakeasyMetadata({ data: "json, name=Entity" })
  entity?: Entity;

  @SpeakeasyMetadata({ data: "json, name=ErrorDetailList", elemType: ErrorDetail })
  errorDetailList?: ErrorDetail[];
}
