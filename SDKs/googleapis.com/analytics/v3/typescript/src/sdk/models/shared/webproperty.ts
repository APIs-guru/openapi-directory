import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WebpropertyChildLink
/** 
 * Child link for this web property. Points to the list of views (profiles) for this web property.
**/
export class WebpropertyChildLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


// WebpropertyParentLink
/** 
 * Parent link for this web property. Points to the account to which this web property belongs.
**/
export class WebpropertyParentLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


// WebpropertyPermissions
/** 
 * Permissions the user has for this web property.
**/
export class WebpropertyPermissions extends SpeakeasyBase {
  @Metadata({ data: "json, name=effective" })
  effective?: string[];
}


// Webproperty
/** 
 * JSON template for an Analytics web property.
**/
export class Webproperty extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=childLink" })
  childLink?: WebpropertyChildLink;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=dataRetentionResetOnNewActivity" })
  dataRetentionResetOnNewActivity?: boolean;

  @Metadata({ data: "json, name=dataRetentionTtl" })
  dataRetentionTtl?: string;

  @Metadata({ data: "json, name=defaultProfileId" })
  defaultProfileId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=industryVertical" })
  industryVertical?: string;

  @Metadata({ data: "json, name=internalWebPropertyId" })
  internalWebPropertyId?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=level" })
  level?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parentLink" })
  parentLink?: WebpropertyParentLink;

  @Metadata({ data: "json, name=permissions" })
  permissions?: WebpropertyPermissions;

  @Metadata({ data: "json, name=profileCount" })
  profileCount?: number;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=starred" })
  starred?: boolean;

  @Metadata({ data: "json, name=updated" })
  updated?: Date;

  @Metadata({ data: "json, name=websiteUrl" })
  websiteUrl?: string;
}
