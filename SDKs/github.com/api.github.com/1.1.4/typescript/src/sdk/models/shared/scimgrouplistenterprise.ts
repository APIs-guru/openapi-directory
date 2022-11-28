import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ScimGroupListEnterpriseResourcesMembers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=$ref" })
  dollarRef?: string;

  @SpeakeasyMetadata({ data: "json, name=display" })
  display?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class ScimGroupListEnterpriseResourcesMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModified" })
  lastModified?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: string;
}


export class ScimGroupListEnterpriseResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=externalId" })
  externalId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=members", elemType: ScimGroupListEnterpriseResourcesMembers })
  members?: ScimGroupListEnterpriseResourcesMembers[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ScimGroupListEnterpriseResourcesMeta;

  @SpeakeasyMetadata({ data: "json, name=schemas" })
  schemas: string[];
}


export class ScimGroupListEnterprise extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Resources", elemType: ScimGroupListEnterpriseResources })
  resources: ScimGroupListEnterpriseResources[];

  @SpeakeasyMetadata({ data: "json, name=itemsPerPage" })
  itemsPerPage: number;

  @SpeakeasyMetadata({ data: "json, name=schemas" })
  schemas: string[];

  @SpeakeasyMetadata({ data: "json, name=startIndex" })
  startIndex: number;

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults: number;
}
