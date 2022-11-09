import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiCoreResponsesEntityUriSystemInt64 extends SpeakeasyBase {
  @Metadata({ data: "json, name=id, form, name=id;" })
  id?: number;

  @Metadata({ data: "json, name=uri, form, name=uri;" })
  uri?: string;
}
