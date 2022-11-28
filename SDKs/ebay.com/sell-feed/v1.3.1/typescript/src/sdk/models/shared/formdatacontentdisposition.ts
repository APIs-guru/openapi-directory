import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FormDataContentDisposition
/** 
 * The metadata for the file.
**/
export class FormDataContentDisposition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=creationDate" })
  creationDate?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=fileName" })
  fileName?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=modificationDate" })
  modificationDate?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=parameters;json=true" })
  parameters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "multipart_form, name=readDate" })
  readDate?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=type" })
  type?: string;
}
