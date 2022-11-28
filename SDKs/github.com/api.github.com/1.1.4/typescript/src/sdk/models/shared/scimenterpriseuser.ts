import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ScimEnterpriseUserEmails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=primary" })
  primary?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class ScimEnterpriseUserGroups extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class ScimEnterpriseUserMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModified" })
  lastModified?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: string;
}


export class ScimEnterpriseUserName extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=familyName" })
  familyName?: string;

  @SpeakeasyMetadata({ data: "json, name=givenName" })
  givenName?: string;
}


export class ScimEnterpriseUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=emails", elemType: ScimEnterpriseUserEmails })
  emails?: ScimEnterpriseUserEmails[];

  @SpeakeasyMetadata({ data: "json, name=externalId" })
  externalId?: string;

  @SpeakeasyMetadata({ data: "json, name=groups", elemType: ScimEnterpriseUserGroups })
  groups?: ScimEnterpriseUserGroups[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ScimEnterpriseUserMeta;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: ScimEnterpriseUserName;

  @SpeakeasyMetadata({ data: "json, name=schemas" })
  schemas: string[];

  @SpeakeasyMetadata({ data: "json, name=userName" })
  userName?: string;
}
