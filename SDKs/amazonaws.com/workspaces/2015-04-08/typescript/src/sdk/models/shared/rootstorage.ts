import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RootStorage
/** 
 * Describes the root volume for a WorkSpace bundle.
**/
export class RootStorage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Capacity" })
  capacity?: string;
}
