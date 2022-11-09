import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PreviewEntity } from "./previewentity";


// FileEntity
/** 
 * List Folders by path
**/
export class FileEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=crc32" })
  crc32?: string;

  @Metadata({ data: "json, name=display_name" })
  displayName?: string;

  @Metadata({ data: "json, name=download_uri" })
  downloadUri?: string;

  @Metadata({ data: "json, name=md5" })
  md5?: string;

  @Metadata({ data: "json, name=mime_type" })
  mimeType?: string;

  @Metadata({ data: "json, name=mtime" })
  mtime?: Date;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=permissions" })
  permissions?: string;

  @Metadata({ data: "json, name=preview" })
  preview?: PreviewEntity;

  @Metadata({ data: "json, name=preview_id" })
  previewId?: number;

  @Metadata({ data: "json, name=priority_color" })
  priorityColor?: string;

  @Metadata({ data: "json, name=provided_mtime" })
  providedMtime?: Date;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=size" })
  size?: number;

  @Metadata({ data: "json, name=subfolders_locked?" })
  subfoldersLocked?: boolean;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
