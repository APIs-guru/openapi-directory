import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WebpropertyChildLink
/** 
 * Child link for this web property. Points to the list of views (profiles) for this web property.
**/
export class WebpropertyChildLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// WebpropertyParentLink
/** 
 * Parent link for this web property. Points to the account to which this web property belongs.
**/
export class WebpropertyParentLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// WebpropertyPermissions
/** 
 * Permissions the user has for this web property.
**/
export class WebpropertyPermissions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effective" })
  effective?: string[];
}


// Webproperty
/** 
 * JSON template for an Analytics web property.
**/
export class Webproperty extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=childLink" })
  childLink?: WebpropertyChildLink;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=dataRetentionResetOnNewActivity" })
  dataRetentionResetOnNewActivity?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dataRetentionTtl" })
  dataRetentionTtl?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultProfileId" })
  defaultProfileId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=industryVertical" })
  industryVertical?: string;

  @SpeakeasyMetadata({ data: "json, name=internalWebPropertyId" })
  internalWebPropertyId?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=level" })
  level?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parentLink" })
  parentLink?: WebpropertyParentLink;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: WebpropertyPermissions;

  @SpeakeasyMetadata({ data: "json, name=profileCount" })
  profileCount?: number;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=starred" })
  starred?: boolean;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: Date;

  @SpeakeasyMetadata({ data: "json, name=websiteUrl" })
  websiteUrl?: string;
}


// WebpropertyInput
/** 
 * JSON template for an Analytics web property.
**/
export class WebpropertyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=childLink" })
  childLink?: WebpropertyChildLink;

  @SpeakeasyMetadata({ data: "json, name=dataRetentionResetOnNewActivity" })
  dataRetentionResetOnNewActivity?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dataRetentionTtl" })
  dataRetentionTtl?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultProfileId" })
  defaultProfileId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=industryVertical" })
  industryVertical?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parentLink" })
  parentLink?: WebpropertyParentLink;

  @SpeakeasyMetadata({ data: "json, name=starred" })
  starred?: boolean;

  @SpeakeasyMetadata({ data: "json, name=websiteUrl" })
  websiteUrl?: string;
}
