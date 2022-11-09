import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DocumentDefaultVersionDescription } from "./documentdefaultversiondescription";


export class UpdateDocumentDefaultVersionResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: DocumentDefaultVersionDescription;
}
