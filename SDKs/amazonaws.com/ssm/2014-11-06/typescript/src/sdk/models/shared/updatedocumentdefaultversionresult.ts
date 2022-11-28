import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DocumentDefaultVersionDescription } from "./documentdefaultversiondescription";



export class UpdateDocumentDefaultVersionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: DocumentDefaultVersionDescription;
}
