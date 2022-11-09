import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ScimGroupListEnterpriseResourcesMembers extends SpeakeasyBase {
  @Metadata({ data: "json, name=$ref" })
  dollarRef?: string;

  @Metadata({ data: "json, name=display" })
  display?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class ScimGroupListEnterpriseResourcesMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: string;

  @Metadata({ data: "json, name=lastModified" })
  lastModified?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: string;
}


export class ScimGroupListEnterpriseResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=externalId" })
  externalId?: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=members", elemType: shared.ScimGroupListEnterpriseResourcesMembers })
  members?: ScimGroupListEnterpriseResourcesMembers[];

  @Metadata({ data: "json, name=meta" })
  meta?: ScimGroupListEnterpriseResourcesMeta;

  @Metadata({ data: "json, name=schemas" })
  schemas: string[];
}


export class ScimGroupListEnterprise extends SpeakeasyBase {
  @Metadata({ data: "json, name=Resources", elemType: shared.ScimGroupListEnterpriseResources })
  resources: ScimGroupListEnterpriseResources[];

  @Metadata({ data: "json, name=itemsPerPage" })
  itemsPerPage: number;

  @Metadata({ data: "json, name=schemas" })
  schemas: string[];

  @Metadata({ data: "json, name=startIndex" })
  startIndex: number;

  @Metadata({ data: "json, name=totalResults" })
  totalResults: number;
}
