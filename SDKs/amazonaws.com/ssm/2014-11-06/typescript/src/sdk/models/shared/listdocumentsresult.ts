import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DocumentIdentifier } from "./documentidentifier";



export class ListDocumentsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DocumentIdentifiers", elemType: DocumentIdentifier })
  documentIdentifiers?: DocumentIdentifier[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
