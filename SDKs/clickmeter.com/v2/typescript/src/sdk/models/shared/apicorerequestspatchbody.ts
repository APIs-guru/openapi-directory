import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiCoreRequestsPatchBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Action, form, name=Action;" })
  action?: string;

  @Metadata({ data: "json, name=Id, form, name=Id;" })
  id?: number;
}
