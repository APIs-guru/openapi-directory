import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActionStatusEnum } from "./actionstatusenum";


export class UpdateActionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActionName" })
  actionName: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Properties" })
  properties?: Map<string, string>;

  @Metadata({ data: "json, name=PropertiesToRemove" })
  propertiesToRemove?: string[];

  @Metadata({ data: "json, name=Status" })
  status?: ActionStatusEnum;
}
