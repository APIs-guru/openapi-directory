import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateAliasRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinations" })
  destinations?: string[];
}
