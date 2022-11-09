import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Key
/** 
 * Key
**/
export class Key extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt: Date;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=key_id" })
  keyId: string;

  @Metadata({ data: "json, name=read_only" })
  readOnly: boolean;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=url" })
  url: string;

  @Metadata({ data: "json, name=verified" })
  verified: boolean;
}
