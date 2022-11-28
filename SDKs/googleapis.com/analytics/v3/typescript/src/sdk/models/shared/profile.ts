import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProfileChildLink
/** 
 * Child link for this view (profile). Points to the list of goals for this view (profile).
**/
export class ProfileChildLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// ProfileParentLink
/** 
 * Parent link for this view (profile). Points to the web property to which this view (profile) belongs.
**/
export class ProfileParentLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// ProfilePermissions
/** 
 * Permissions the user has for this view (profile).
**/
export class ProfilePermissions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effective" })
  effective?: string[];
}


// Profile
/** 
 * JSON template for an Analytics view (profile).
**/
export class Profile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=botFilteringEnabled" })
  botFilteringEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=childLink" })
  childLink?: ProfileChildLink;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultPage" })
  defaultPage?: string;

  @SpeakeasyMetadata({ data: "json, name=eCommerceTracking" })
  eCommerceTracking?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enhancedECommerceTracking" })
  enhancedECommerceTracking?: boolean;

  @SpeakeasyMetadata({ data: "json, name=excludeQueryParameters" })
  excludeQueryParameters?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=internalWebPropertyId" })
  internalWebPropertyId?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parentLink" })
  parentLink?: ProfileParentLink;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: ProfilePermissions;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=siteSearchCategoryParameters" })
  siteSearchCategoryParameters?: string;

  @SpeakeasyMetadata({ data: "json, name=siteSearchQueryParameters" })
  siteSearchQueryParameters?: string;

  @SpeakeasyMetadata({ data: "json, name=starred" })
  starred?: boolean;

  @SpeakeasyMetadata({ data: "json, name=stripSiteSearchCategoryParameters" })
  stripSiteSearchCategoryParameters?: boolean;

  @SpeakeasyMetadata({ data: "json, name=stripSiteSearchQueryParameters" })
  stripSiteSearchQueryParameters?: boolean;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: Date;

  @SpeakeasyMetadata({ data: "json, name=webPropertyId" })
  webPropertyId?: string;

  @SpeakeasyMetadata({ data: "json, name=websiteUrl" })
  websiteUrl?: string;
}


// ProfileInput
/** 
 * JSON template for an Analytics view (profile).
**/
export class ProfileInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=botFilteringEnabled" })
  botFilteringEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=childLink" })
  childLink?: ProfileChildLink;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultPage" })
  defaultPage?: string;

  @SpeakeasyMetadata({ data: "json, name=eCommerceTracking" })
  eCommerceTracking?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enhancedECommerceTracking" })
  enhancedECommerceTracking?: boolean;

  @SpeakeasyMetadata({ data: "json, name=excludeQueryParameters" })
  excludeQueryParameters?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parentLink" })
  parentLink?: ProfileParentLink;

  @SpeakeasyMetadata({ data: "json, name=siteSearchCategoryParameters" })
  siteSearchCategoryParameters?: string;

  @SpeakeasyMetadata({ data: "json, name=siteSearchQueryParameters" })
  siteSearchQueryParameters?: string;

  @SpeakeasyMetadata({ data: "json, name=starred" })
  starred?: boolean;

  @SpeakeasyMetadata({ data: "json, name=stripSiteSearchCategoryParameters" })
  stripSiteSearchCategoryParameters?: boolean;

  @SpeakeasyMetadata({ data: "json, name=stripSiteSearchQueryParameters" })
  stripSiteSearchQueryParameters?: boolean;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=websiteUrl" })
  websiteUrl?: string;
}
