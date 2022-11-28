import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Container
/** 
 * Container runnable.
**/
export class Container extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blockExternalNetwork" })
  blockExternalNetwork?: boolean;

  @SpeakeasyMetadata({ data: "json, name=commands" })
  commands?: string[];

  @SpeakeasyMetadata({ data: "json, name=entrypoint" })
  entrypoint?: string;

  @SpeakeasyMetadata({ data: "json, name=imageUri" })
  imageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;

  @SpeakeasyMetadata({ data: "json, name=volumes" })
  volumes?: string[];
}
