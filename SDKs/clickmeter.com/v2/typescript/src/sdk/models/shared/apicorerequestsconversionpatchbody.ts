import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiCoreRequestsConversionPatchBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Action, form, name=Action;" })
  action?: string;

  @Metadata({ data: "json, name=Id, form, name=Id;" })
  id?: number;

  @Metadata({ data: "json, name=ReplaceId, form, name=ReplaceId;" })
  replaceId?: number;
}
