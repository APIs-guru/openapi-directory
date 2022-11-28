import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AntiSpamTypesEnum } from "./antispamtypesenum";



export class AntiSpam extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowed_types" })
  allowedTypes?: AntiSpamTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: AntiSpamTypesEnum;
}
