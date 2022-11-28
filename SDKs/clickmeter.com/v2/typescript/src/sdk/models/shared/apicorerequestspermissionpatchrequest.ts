import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiCoreRequestsPermissionPatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Action, form, name=Action;" })
  action?: string;

  @SpeakeasyMetadata({ data: "json, name=Id, form, name=Id;" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=Verb, form, name=Verb;" })
  verb?: string;
}
