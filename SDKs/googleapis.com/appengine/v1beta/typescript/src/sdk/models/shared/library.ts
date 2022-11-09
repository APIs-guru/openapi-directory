import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Library
/** 
 * Third-party Python runtime library that is required by the application.
**/
export class Library extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
