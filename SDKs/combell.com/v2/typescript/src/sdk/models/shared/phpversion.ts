import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PhpVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
