import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PreSignInfoFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class PreSignInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fetchUrl" })
  fetchUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=fields", elemType: PreSignInfoFields })
  fields?: PreSignInfoFields[];

  @SpeakeasyMetadata({ data: "json, name=putUrl" })
  putUrl?: string;
}
