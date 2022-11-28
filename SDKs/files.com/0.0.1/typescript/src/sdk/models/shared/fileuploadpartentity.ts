import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FileUploadPartEntity
/** 
 * Begin file upload
**/
export class FileUploadPartEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: string;

  @SpeakeasyMetadata({ data: "json, name=ask_about_overwrites" })
  askAboutOverwrites?: boolean;

  @SpeakeasyMetadata({ data: "json, name=available_parts" })
  availableParts?: number;

  @SpeakeasyMetadata({ data: "json, name=expires" })
  expires?: string;

  @SpeakeasyMetadata({ data: "json, name=headers" })
  headers?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=http_method" })
  httpMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=next_partsize" })
  nextPartsize?: number;

  @SpeakeasyMetadata({ data: "json, name=parallel_parts" })
  parallelParts?: boolean;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=part_number" })
  partNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=partsize" })
  partsize?: number;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=ref" })
  ref?: string;

  @SpeakeasyMetadata({ data: "json, name=send" })
  send?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=upload_uri" })
  uploadUri?: string;
}
