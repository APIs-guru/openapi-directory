import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PreviewEntity } from "./previewentity";



// FileEntity
/** 
 * List Folders by path
**/
export class FileEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=crc32" })
  crc32?: string;

  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=download_uri" })
  downloadUri?: string;

  @SpeakeasyMetadata({ data: "json, name=md5" })
  md5?: string;

  @SpeakeasyMetadata({ data: "json, name=mime_type" })
  mimeType?: string;

  @SpeakeasyMetadata({ data: "json, name=mtime" })
  mtime?: Date;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: string;

  @SpeakeasyMetadata({ data: "json, name=preview" })
  preview?: PreviewEntity;

  @SpeakeasyMetadata({ data: "json, name=preview_id" })
  previewId?: number;

  @SpeakeasyMetadata({ data: "json, name=priority_color" })
  priorityColor?: string;

  @SpeakeasyMetadata({ data: "json, name=provided_mtime" })
  providedMtime?: Date;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=subfolders_locked?" })
  subfoldersLocked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
