import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AntiSpamTypesEnum } from "./antispamtypesenum";



export class UpdateAntiSpamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: AntiSpamTypesEnum;
}
