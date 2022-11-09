import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PhpVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=version" })
  version?: string;
}
