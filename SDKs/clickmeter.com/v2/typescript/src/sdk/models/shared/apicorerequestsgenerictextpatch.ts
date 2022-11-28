import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiCoreRequestsGenericTextPatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Text, form, name=Text;" })
  text?: string;
}
