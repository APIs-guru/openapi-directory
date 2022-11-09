import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AcceptCodeValidationEnum } from "./acceptcodevalidationenum";
import { AcceptTypeEnum } from "./accepttypeenum";


export class AcceptPageRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceptCode" })
  acceptCode: string;

  @Metadata({ data: "json, name=AcceptCodeValidation" })
  acceptCodeValidation?: AcceptCodeValidationEnum;

  @Metadata({ data: "json, name=AcceptType" })
  acceptType: AcceptTypeEnum;

  @Metadata({ data: "json, name=ContactChannelId" })
  contactChannelId?: string;

  @Metadata({ data: "json, name=Note" })
  note?: string;

  @Metadata({ data: "json, name=PageId" })
  pageId: string;
}
