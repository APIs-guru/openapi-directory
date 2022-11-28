import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ScimUserEmails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=primary" })
  primary?: boolean;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}


export class ScimUserMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastModified" })
  lastModified?: Date;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: string;
}


export class ScimUserName extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=familyName" })
  familyName: string;

  @SpeakeasyMetadata({ data: "json, name=formatted" })
  formatted?: string;

  @SpeakeasyMetadata({ data: "json, name=givenName" })
  givenName: string;
}

export enum ScimUserOperationsOpEnum {
    Add = "add",
    Remove = "remove",
    Replace = "replace"
}


export class ScimUserOperations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=op" })
  op: ScimUserOperationsOpEnum;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: any;
}


// ScimUser
/** 
 * SCIM /Users provisioning endpoints
**/
export class ScimUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active: boolean;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=emails", elemType: ScimUserEmails })
  emails: ScimUserEmails[];

  @SpeakeasyMetadata({ data: "json, name=externalId" })
  externalId: string;

  @SpeakeasyMetadata({ data: "json, name=groups" })
  groups?: any[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: ScimUserMeta;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: ScimUserName;

  @SpeakeasyMetadata({ data: "json, name=operations", elemType: ScimUserOperations })
  operations?: ScimUserOperations[];

  @SpeakeasyMetadata({ data: "json, name=organization_id" })
  organizationId?: number;

  @SpeakeasyMetadata({ data: "json, name=schemas" })
  schemas: string[];

  @SpeakeasyMetadata({ data: "json, name=userName" })
  userName: string;
}
