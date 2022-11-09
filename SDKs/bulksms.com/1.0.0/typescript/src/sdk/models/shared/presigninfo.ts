import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PreSignInfoFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class PreSignInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=fetchUrl" })
  fetchUrl?: string;

  @Metadata({ data: "json, name=fields", elemType: shared.PreSignInfoFields })
  fields?: PreSignInfoFields[];

  @Metadata({ data: "json, name=putUrl" })
  putUrl?: string;
}
