import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FileKeyContainer
/** 
 * File key container
**/
export class FileKeyContainer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=iv" })
  iv: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version: string;
}
