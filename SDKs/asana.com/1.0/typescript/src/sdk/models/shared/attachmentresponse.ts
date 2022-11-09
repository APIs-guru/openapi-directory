import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AttachmentResponseParent extends SpeakeasyBase {
  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;
}


export class AttachmentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=download_url" })
  downloadUrl?: string;

  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=host" })
  host?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parent" })
  parent?: AttachmentResponseParent;

  @Metadata({ data: "json, name=resource_subtype" })
  resourceSubtype?: any;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @Metadata({ data: "json, name=view_url" })
  viewUrl?: string;
}
