import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Key
/** 
 * Key
**/
export class Key extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=key_id" })
  keyId: string;

  @SpeakeasyMetadata({ data: "json, name=read_only" })
  readOnly: boolean;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;

  @SpeakeasyMetadata({ data: "json, name=verified" })
  verified: boolean;
}
