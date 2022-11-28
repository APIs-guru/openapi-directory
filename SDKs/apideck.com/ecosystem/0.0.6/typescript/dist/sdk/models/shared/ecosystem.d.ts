import { SpeakeasyBase } from "../../../internal/utils";
import { CardSettings } from "./cardsettings";
import { CtaSettings } from "./ctasettings";
import { CustomSettings } from "./customsettings";
import { IntegrationSettings } from "./integrationsettings";
import { LeadFormSettings } from "./leadformsettings";
import { ListingSettings } from "./listingsettings";
import { MastheadSettings } from "./mastheadsettings";
import { MetaTagSettings } from "./metatagsettings";
export declare enum EcosystemMenuPositionEnum {
    Top = "TOP",
    Left = "LEFT",
    Right = "RIGHT",
    Hidden = "HIDDEN"
}
export declare enum EcosystemMenuStyleEnum {
    List = "LIST",
    Pill = "PILL",
    Filter = "FILTER"
}
export declare enum EcosystemNavigationMobileMenuTypeEnum {
    Icon = "ICON",
    Text = "TEXT"
}
export declare class Ecosystem extends SpeakeasyBase {
    about?: string;
    alternativesBackgroundColor?: string;
    alternativesColor?: string;
    attribution?: boolean;
    bodyBackgroundColor?: string;
    bodyButtonBackgroundColor?: string;
    bodyButtonColor?: string;
    bodyColor?: string;
    bodyLinkColor?: string;
    cardSettings?: CardSettings;
    categoriesCountBadge?: boolean;
    categoriesShowMaxItems?: number;
    collectionsCountBadge?: boolean;
    collectionsTitle?: string;
    createLink?: string;
    createdAt?: Date;
    ctaSettings?: CtaSettings;
    customDomain?: string;
    customSettings?: CustomSettings;
    detailPagesEnabled?: boolean;
    footerBackgroundColor?: string;
    footerColor?: string;
    googleSiteVerificationId?: string;
    hideInstallButtons?: boolean;
    homePageCollectionCategoryCards?: boolean;
    homePageShowAllListings?: boolean;
    id?: string;
    installationRequestFlowEnabled?: boolean;
    integrationSettings?: IntegrationSettings;
    isPublished: boolean;
    leadFormSettings?: LeadFormSettings;
    listingSettings?: ListingSettings;
    mastheadSettings?: MastheadSettings;
    menuPosition?: EcosystemMenuPositionEnum;
    menuStyle?: EcosystemMenuStyleEnum;
    metaTagSettings?: MetaTagSettings;
    name: string;
    navigationBackgroundColor?: string;
    navigationColor?: string;
    navigationLogoPostFix?: string;
    navigationMobileMenuType?: EcosystemNavigationMobileMenuTypeEnum;
    navigationSticky?: boolean;
    primaryColor?: string;
    privacyLink?: string;
    requestLink?: string;
    shadowPageDescription?: string;
    shadowPagesEnabled?: boolean;
    showAttributionBadge?: boolean;
    showRequestedListings?: boolean;
    slug: string;
    termsLink?: string;
    totalPublishedListings?: number;
    unifyApplicationId?: string;
    updatedAt?: Date;
    utmCampaign?: string;
    website?: string;
    zapsMenuTitle?: string;
    zapsPageEnabled?: boolean;
}
