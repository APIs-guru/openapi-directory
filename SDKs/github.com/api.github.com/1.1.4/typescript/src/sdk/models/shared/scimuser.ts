import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ScimUserEmails extends SpeakeasyBase {
  @Metadata({ data: "json, name=primary" })
  primary?: boolean;

  @Metadata({ data: "json, name=value" })
  value: string;
}


export class ScimUserMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=lastModified" })
  lastModified?: Date;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: string;
}


export class ScimUserName extends SpeakeasyBase {
  @Metadata({ data: "json, name=familyName" })
  familyName: string;

  @Metadata({ data: "json, name=formatted" })
  formatted?: string;

  @Metadata({ data: "json, name=givenName" })
  givenName: string;
}

export enum ScimUserOperationsOpEnum {
    Add = "add"
,    Remove = "remove"
,    Replace = "replace"
}


export class ScimUserOperations extends SpeakeasyBase {
  @Metadata({ data: "json, name=op" })
  op: ScimUserOperationsOpEnum;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=value" })
  value?: any;
}


// ScimUser
/** 
 * SCIM /Users provisioning endpoints
**/
export class ScimUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active: boolean;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=emails", elemType: shared.ScimUserEmails })
  emails: ScimUserEmails[];

  @Metadata({ data: "json, name=externalId" })
  externalId: string;

  @Metadata({ data: "json, name=groups" })
  groups?: any[];

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=meta" })
  meta: ScimUserMeta;

  @Metadata({ data: "json, name=name" })
  name: ScimUserName;

  @Metadata({ data: "json, name=operations", elemType: shared.ScimUserOperations })
  operations?: ScimUserOperations[];

  @Metadata({ data: "json, name=organization_id" })
  organizationId?: number;

  @Metadata({ data: "json, name=schemas" })
  schemas: string[];

  @Metadata({ data: "json, name=userName" })
  userName: string;
}
