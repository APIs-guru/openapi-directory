import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FileUploadPartEntity
/** 
 * Begin file upload
**/
export class FileUploadPartEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: string;

  @Metadata({ data: "json, name=ask_about_overwrites" })
  askAboutOverwrites?: boolean;

  @Metadata({ data: "json, name=available_parts" })
  availableParts?: number;

  @Metadata({ data: "json, name=expires" })
  expires?: string;

  @Metadata({ data: "json, name=headers" })
  headers?: Map<string, any>;

  @Metadata({ data: "json, name=http_method" })
  httpMethod?: string;

  @Metadata({ data: "json, name=next_partsize" })
  nextPartsize?: number;

  @Metadata({ data: "json, name=parallel_parts" })
  parallelParts?: boolean;

  @Metadata({ data: "json, name=parameters" })
  parameters?: Map<string, any>;

  @Metadata({ data: "json, name=part_number" })
  partNumber?: number;

  @Metadata({ data: "json, name=partsize" })
  partsize?: number;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=ref" })
  ref?: string;

  @Metadata({ data: "json, name=send" })
  send?: Map<string, any>;

  @Metadata({ data: "json, name=upload_uri" })
  uploadUri?: string;
}
