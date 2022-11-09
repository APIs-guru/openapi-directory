import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Artifact
/** 
 * An artifact
**/
export class Artifact extends SpeakeasyBase {
  @Metadata({ data: "json, name=archive_download_url" })
  archiveDownloadUrl: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt: Date;

  @Metadata({ data: "json, name=expired" })
  expired: boolean;

  @Metadata({ data: "json, name=expires_at" })
  expiresAt: Date;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=size_in_bytes" })
  sizeInBytes: number;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @Metadata({ data: "json, name=url" })
  url: string;
}
