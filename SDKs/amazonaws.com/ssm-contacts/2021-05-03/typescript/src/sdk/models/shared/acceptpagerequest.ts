import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AcceptCodeValidationEnum } from "./acceptcodevalidationenum";
import { AcceptTypeEnum } from "./accepttypeenum";



export class AcceptPageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceptCode" })
  acceptCode: string;

  @SpeakeasyMetadata({ data: "json, name=AcceptCodeValidation" })
  acceptCodeValidation?: AcceptCodeValidationEnum;

  @SpeakeasyMetadata({ data: "json, name=AcceptType" })
  acceptType: AcceptTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ContactChannelId" })
  contactChannelId?: string;

  @SpeakeasyMetadata({ data: "json, name=Note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=PageId" })
  pageId: string;
}
