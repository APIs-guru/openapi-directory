import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiCoreResponsesEntityUriSystemInt64 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id, form, name=id;" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=uri, form, name=uri;" })
  uri?: string;
}
