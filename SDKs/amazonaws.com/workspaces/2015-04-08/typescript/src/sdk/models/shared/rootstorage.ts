import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RootStorage
/** 
 * Describes the root volume for a WorkSpace bundle.
**/
export class RootStorage extends SpeakeasyBase {
  @Metadata({ data: "json, name=Capacity" })
  capacity?: string;
}
