import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiCoreRequestsConversionPatchBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Action, form, name=Action;" })
  action?: string;

  @SpeakeasyMetadata({ data: "json, name=Id, form, name=Id;" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=ReplaceId, form, name=ReplaceId;" })
  replaceId?: number;
}
