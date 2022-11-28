import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentIdentifier } from "./documentidentifier";
export declare class ListDocumentsResult extends SpeakeasyBase {
    documentIdentifiers?: DocumentIdentifier[];
    nextToken?: string;
}
