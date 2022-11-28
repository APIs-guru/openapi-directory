import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Library
/** 
 * Third-party Python runtime library that is required by the application.
**/
export class Library extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
