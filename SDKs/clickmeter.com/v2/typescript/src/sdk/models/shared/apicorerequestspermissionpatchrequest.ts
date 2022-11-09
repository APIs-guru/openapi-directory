import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiCoreRequestsPermissionPatchRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Action, form, name=Action;" })
  action?: string;

  @Metadata({ data: "json, name=Id, form, name=Id;" })
  id?: number;

  @Metadata({ data: "json, name=Verb, form, name=Verb;" })
  verb?: string;
}
