import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeployKey
/** 
 * An SSH key granting access to a single repository.
**/
export class DeployKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=read_only" })
  readOnly: boolean;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=url" })
  url: string;

  @Metadata({ data: "json, name=verified" })
  verified: boolean;
}
