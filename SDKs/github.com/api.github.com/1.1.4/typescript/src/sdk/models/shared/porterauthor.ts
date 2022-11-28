import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PorterAuthor
/** 
 * Porter Author
**/
export class PorterAuthor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=import_url" })
  importUrl: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=remote_id" })
  remoteId: string;

  @SpeakeasyMetadata({ data: "json, name=remote_name" })
  remoteName: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
