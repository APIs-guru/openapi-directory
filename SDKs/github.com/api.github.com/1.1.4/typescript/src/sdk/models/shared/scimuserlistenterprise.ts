import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ScimUserListEnterpriseResourcesEmails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=primary" })
  primary?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class ScimUserListEnterpriseResourcesGroups extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class ScimUserListEnterpriseResourcesMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModified" })
  lastModified?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: string;
}


export class ScimUserListEnterpriseResourcesName extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=familyName" })
  familyName?: string;

  @SpeakeasyMetadata({ data: "json, name=givenName" })
  givenName?: string;
}


export class ScimUserListEnterpriseResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=emails", elemType: ScimUserListEnterpriseResourcesEmails })
  emails?: ScimUserListEnterpriseResourcesEmails[];

  @SpeakeasyMetadata({ data: "json, name=externalId" })
  externalId?: string;

  @SpeakeasyMetadata({ data: "json, name=groups", elemType: ScimUserListEnterpriseResourcesGroups })
  groups?: ScimUserListEnterpriseResourcesGroups[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ScimUserListEnterpriseResourcesMeta;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: ScimUserListEnterpriseResourcesName;

  @SpeakeasyMetadata({ data: "json, name=schemas" })
  schemas: string[];

  @SpeakeasyMetadata({ data: "json, name=userName" })
  userName?: string;
}


export class ScimUserListEnterprise extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Resources", elemType: ScimUserListEnterpriseResources })
  resources: ScimUserListEnterpriseResources[];

  @SpeakeasyMetadata({ data: "json, name=itemsPerPage" })
  itemsPerPage: number;

  @SpeakeasyMetadata({ data: "json, name=schemas" })
  schemas: string[];

  @SpeakeasyMetadata({ data: "json, name=startIndex" })
  startIndex: number;

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults: number;
}
