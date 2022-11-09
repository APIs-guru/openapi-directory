import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProfileChildLink
/** 
 * Child link for this view (profile). Points to the list of goals for this view (profile).
**/
export class ProfileChildLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


// ProfileParentLink
/** 
 * Parent link for this view (profile). Points to the web property to which this view (profile) belongs.
**/
export class ProfileParentLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


// ProfilePermissions
/** 
 * Permissions the user has for this view (profile).
**/
export class ProfilePermissions extends SpeakeasyBase {
  @Metadata({ data: "json, name=effective" })
  effective?: string[];
}


// Profile
/** 
 * JSON template for an Analytics view (profile).
**/
export class Profile extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=botFilteringEnabled" })
  botFilteringEnabled?: boolean;

  @Metadata({ data: "json, name=childLink" })
  childLink?: ProfileChildLink;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=currency" })
  currency?: string;

  @Metadata({ data: "json, name=defaultPage" })
  defaultPage?: string;

  @Metadata({ data: "json, name=eCommerceTracking" })
  eCommerceTracking?: boolean;

  @Metadata({ data: "json, name=enhancedECommerceTracking" })
  enhancedECommerceTracking?: boolean;

  @Metadata({ data: "json, name=excludeQueryParameters" })
  excludeQueryParameters?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=internalWebPropertyId" })
  internalWebPropertyId?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parentLink" })
  parentLink?: ProfileParentLink;

  @Metadata({ data: "json, name=permissions" })
  permissions?: ProfilePermissions;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=siteSearchCategoryParameters" })
  siteSearchCategoryParameters?: string;

  @Metadata({ data: "json, name=siteSearchQueryParameters" })
  siteSearchQueryParameters?: string;

  @Metadata({ data: "json, name=starred" })
  starred?: boolean;

  @Metadata({ data: "json, name=stripSiteSearchCategoryParameters" })
  stripSiteSearchCategoryParameters?: boolean;

  @Metadata({ data: "json, name=stripSiteSearchQueryParameters" })
  stripSiteSearchQueryParameters?: boolean;

  @Metadata({ data: "json, name=timezone" })
  timezone?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=updated" })
  updated?: Date;

  @Metadata({ data: "json, name=webPropertyId" })
  webPropertyId?: string;

  @Metadata({ data: "json, name=websiteUrl" })
  websiteUrl?: string;
}
