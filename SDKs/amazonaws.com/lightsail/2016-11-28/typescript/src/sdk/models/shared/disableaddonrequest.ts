import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AddOnTypeEnum } from "./addontypeenum";


export class DisableAddOnRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=addOnType" })
  addOnType: AddOnTypeEnum;

  @Metadata({ data: "json, name=resourceName" })
  resourceName: string;
}
