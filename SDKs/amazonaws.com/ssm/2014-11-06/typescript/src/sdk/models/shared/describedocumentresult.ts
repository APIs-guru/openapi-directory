import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DocumentDescription } from "./documentdescription";


export class DescribeDocumentResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Document" })
  document?: DocumentDescription;
}
