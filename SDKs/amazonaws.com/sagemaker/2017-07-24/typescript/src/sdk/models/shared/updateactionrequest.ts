import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionStatusEnum } from "./actionstatusenum";



export class UpdateActionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActionName" })
  actionName: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Properties" })
  properties?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=PropertiesToRemove" })
  propertiesToRemove?: string[];

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ActionStatusEnum;
}
