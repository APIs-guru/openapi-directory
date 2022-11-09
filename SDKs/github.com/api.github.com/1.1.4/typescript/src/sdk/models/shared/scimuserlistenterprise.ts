import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ScimUserListEnterpriseResourcesEmails extends SpeakeasyBase {
  @Metadata({ data: "json, name=primary" })
  primary?: boolean;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class ScimUserListEnterpriseResourcesGroups extends SpeakeasyBase {
  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class ScimUserListEnterpriseResourcesMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: string;

  @Metadata({ data: "json, name=lastModified" })
  lastModified?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: string;
}


export class ScimUserListEnterpriseResourcesName extends SpeakeasyBase {
  @Metadata({ data: "json, name=familyName" })
  familyName?: string;

  @Metadata({ data: "json, name=givenName" })
  givenName?: string;
}


export class ScimUserListEnterpriseResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=emails", elemType: shared.ScimUserListEnterpriseResourcesEmails })
  emails?: ScimUserListEnterpriseResourcesEmails[];

  @Metadata({ data: "json, name=externalId" })
  externalId?: string;

  @Metadata({ data: "json, name=groups", elemType: shared.ScimUserListEnterpriseResourcesGroups })
  groups?: ScimUserListEnterpriseResourcesGroups[];

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=meta" })
  meta?: ScimUserListEnterpriseResourcesMeta;

  @Metadata({ data: "json, name=name" })
  name?: ScimUserListEnterpriseResourcesName;

  @Metadata({ data: "json, name=schemas" })
  schemas: string[];

  @Metadata({ data: "json, name=userName" })
  userName?: string;
}


export class ScimUserListEnterprise extends SpeakeasyBase {
  @Metadata({ data: "json, name=Resources", elemType: shared.ScimUserListEnterpriseResources })
  resources: ScimUserListEnterpriseResources[];

  @Metadata({ data: "json, name=itemsPerPage" })
  itemsPerPage: number;

  @Metadata({ data: "json, name=schemas" })
  schemas: string[];

  @Metadata({ data: "json, name=startIndex" })
  startIndex: number;

  @Metadata({ data: "json, name=totalResults" })
  totalResults: number;
}
