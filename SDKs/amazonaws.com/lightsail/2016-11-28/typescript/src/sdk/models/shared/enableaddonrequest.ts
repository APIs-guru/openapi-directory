import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AddOnRequest } from "./addonrequest";


export class EnableAddOnRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=addOnRequest" })
  addOnRequest: AddOnRequest;

  @Metadata({ data: "json, name=resourceName" })
  resourceName: string;
}
