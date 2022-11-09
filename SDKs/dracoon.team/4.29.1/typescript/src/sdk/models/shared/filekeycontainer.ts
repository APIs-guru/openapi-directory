import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FileKeyContainer
/** 
 * File key container
**/
export class FileKeyContainer extends SpeakeasyBase {
  @Metadata({ data: "json, name=iv" })
  iv: string;

  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=tag" })
  tag?: string;

  @Metadata({ data: "json, name=version" })
  version: string;
}
