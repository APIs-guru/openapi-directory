import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FilterRef } from "./filterref";
import { ProfileRef } from "./profileref";
import { FilterRefInput } from "./filterref";



// ProfileFilterLink
/** 
 * JSON template for an Analytics profile filter link.
**/
export class ProfileFilterLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filterRef" })
  filterRef?: FilterRef;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=profileRef" })
  profileRef?: ProfileRef;

  @SpeakeasyMetadata({ data: "json, name=rank" })
  rank?: number;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;
}


// ProfileFilterLinkInput
/** 
 * JSON template for an Analytics profile filter link.
**/
export class ProfileFilterLinkInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filterRef" })
  filterRef?: FilterRefInput;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=profileRef" })
  profileRef?: ProfileRef;

  @SpeakeasyMetadata({ data: "json, name=rank" })
  rank?: number;
}
