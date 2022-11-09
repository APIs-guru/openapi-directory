import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiCoreRequestsGenericTextPatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=Text, form, name=Text;" })
  text?: string;
}
