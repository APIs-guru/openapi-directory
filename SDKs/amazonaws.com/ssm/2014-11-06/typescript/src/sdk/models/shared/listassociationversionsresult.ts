import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssociationVersionInfo } from "./associationversioninfo";



export class ListAssociationVersionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssociationVersions", elemType: AssociationVersionInfo })
  associationVersions?: AssociationVersionInfo[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
