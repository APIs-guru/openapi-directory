import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateAliasRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinations" })
  destinations?: string[];
}
