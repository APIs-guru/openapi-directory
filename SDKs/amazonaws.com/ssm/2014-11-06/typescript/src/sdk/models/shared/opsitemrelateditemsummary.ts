import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OpsItemIdentity } from "./opsitemidentity";
import { OpsItemIdentity } from "./opsitemidentity";


// OpsItemRelatedItemSummary
/** 
 * Summary information about related-item resources for an OpsItem.
**/
export class OpsItemRelatedItemSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssociationId" })
  associationId?: string;

  @Metadata({ data: "json, name=AssociationType" })
  associationType?: string;

  @Metadata({ data: "json, name=CreatedBy" })
  createdBy?: OpsItemIdentity;

  @Metadata({ data: "json, name=CreatedTime" })
  createdTime?: Date;

  @Metadata({ data: "json, name=LastModifiedBy" })
  lastModifiedBy?: OpsItemIdentity;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=OpsItemId" })
  opsItemId?: string;

  @Metadata({ data: "json, name=ResourceType" })
  resourceType?: string;

  @Metadata({ data: "json, name=ResourceUri" })
  resourceUri?: string;
}
