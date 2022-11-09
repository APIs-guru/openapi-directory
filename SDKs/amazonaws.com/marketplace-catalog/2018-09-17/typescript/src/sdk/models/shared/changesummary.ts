import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Entity } from "./entity";
import { ErrorDetail } from "./errordetail";


// ChangeSummary
/** 
 * This object is a container for common summary information about the change. The summary doesn't contain the whole change structure.
**/
export class ChangeSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeName" })
  changeName?: string;

  @Metadata({ data: "json, name=ChangeType" })
  changeType?: string;

  @Metadata({ data: "json, name=Details" })
  details?: string;

  @Metadata({ data: "json, name=Entity" })
  entity?: Entity;

  @Metadata({ data: "json, name=ErrorDetailList", elemType: shared.ErrorDetail })
  errorDetailList?: ErrorDetail[];
}
