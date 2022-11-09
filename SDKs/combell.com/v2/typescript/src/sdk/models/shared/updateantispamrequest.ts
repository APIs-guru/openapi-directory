import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AntiSpamTypesEnum } from "./antispamtypesenum";


export class UpdateAntiSpamRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: AntiSpamTypesEnum;
}
