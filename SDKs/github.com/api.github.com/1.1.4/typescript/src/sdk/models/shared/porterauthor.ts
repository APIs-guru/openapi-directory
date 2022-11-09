import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PorterAuthor
/** 
 * Porter Author
**/
export class PorterAuthor extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=import_url" })
  importUrl: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=remote_id" })
  remoteId: string;

  @Metadata({ data: "json, name=remote_name" })
  remoteName: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}
