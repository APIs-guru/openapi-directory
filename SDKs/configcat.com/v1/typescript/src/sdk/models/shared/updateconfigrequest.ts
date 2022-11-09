import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateConfigRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}
