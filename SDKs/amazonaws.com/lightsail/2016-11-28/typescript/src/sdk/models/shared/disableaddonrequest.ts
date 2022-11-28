import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AddOnTypeEnum } from "./addontypeenum";



export class DisableAddOnRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addOnType" })
  addOnType: AddOnTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=resourceName" })
  resourceName: string;
}
