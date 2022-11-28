import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AddOnRequest } from "./addonrequest";



export class EnableAddOnRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addOnRequest" })
  addOnRequest: AddOnRequest;

  @SpeakeasyMetadata({ data: "json, name=resourceName" })
  resourceName: string;
}
