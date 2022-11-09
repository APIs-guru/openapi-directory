import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FormDataContentDisposition
/** 
 * The metadata for the file.
**/
export class FormDataContentDisposition extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=creationDate" })
  creationDate?: string;

  @Metadata({ data: "multipart_form, name=fileName" })
  fileName?: string;

  @Metadata({ data: "multipart_form, name=modificationDate" })
  modificationDate?: string;

  @Metadata({ data: "multipart_form, name=name" })
  name?: string;

  @Metadata({ data: "multipart_form, name=parameters;json=true" })
  parameters?: Map<string, string>;

  @Metadata({ data: "multipart_form, name=readDate" })
  readDate?: string;

  @Metadata({ data: "multipart_form, name=size" })
  size?: number;

  @Metadata({ data: "multipart_form, name=type" })
  type?: string;
}
