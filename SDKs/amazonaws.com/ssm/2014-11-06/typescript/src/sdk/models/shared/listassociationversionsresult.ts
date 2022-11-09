import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssociationVersionInfo } from "./associationversioninfo";


export class ListAssociationVersionsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssociationVersions", elemType: shared.AssociationVersionInfo })
  associationVersions?: AssociationVersionInfo[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
