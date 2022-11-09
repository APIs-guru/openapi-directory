import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ScimEnterpriseUserEmails extends SpeakeasyBase {
  @Metadata({ data: "json, name=primary" })
  primary?: boolean;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class ScimEnterpriseUserGroups extends SpeakeasyBase {
  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class ScimEnterpriseUserMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: string;

  @Metadata({ data: "json, name=lastModified" })
  lastModified?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: string;
}


export class ScimEnterpriseUserName extends SpeakeasyBase {
  @Metadata({ data: "json, name=familyName" })
  familyName?: string;

  @Metadata({ data: "json, name=givenName" })
  givenName?: string;
}


export class ScimEnterpriseUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=emails", elemType: shared.ScimEnterpriseUserEmails })
  emails?: ScimEnterpriseUserEmails[];

  @Metadata({ data: "json, name=externalId" })
  externalId?: string;

  @Metadata({ data: "json, name=groups", elemType: shared.ScimEnterpriseUserGroups })
  groups?: ScimEnterpriseUserGroups[];

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=meta" })
  meta?: ScimEnterpriseUserMeta;

  @Metadata({ data: "json, name=name" })
  name?: ScimEnterpriseUserName;

  @Metadata({ data: "json, name=schemas" })
  schemas: string[];

  @Metadata({ data: "json, name=userName" })
  userName?: string;
}
