import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DocumentIdentifier } from "./documentidentifier";


export class ListDocumentsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=DocumentIdentifiers", elemType: shared.DocumentIdentifier })
  documentIdentifiers?: DocumentIdentifier[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
