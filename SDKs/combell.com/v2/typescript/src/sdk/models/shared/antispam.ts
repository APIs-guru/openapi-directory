import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AntiSpamTypesEnum } from "./antispamtypesenum";
import { AntiSpamTypesEnum } from "./antispamtypesenum";


export class AntiSpam extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowed_types" })
  allowedTypes?: AntiSpamTypesEnum[];

  @Metadata({ data: "json, name=type" })
  type?: AntiSpamTypesEnum;
}
