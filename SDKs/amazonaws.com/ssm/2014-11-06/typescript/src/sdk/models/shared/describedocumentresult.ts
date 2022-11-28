import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DocumentDescription } from "./documentdescription";



export class DescribeDocumentResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Document" })
  document?: DocumentDescription;
}
