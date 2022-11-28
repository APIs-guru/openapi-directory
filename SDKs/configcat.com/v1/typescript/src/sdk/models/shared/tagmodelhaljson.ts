import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TagModelHaljsonEmbeddedProductEmbeddedOrganizationLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=members" })
  members?: string;

  @SpeakeasyMetadata({ data: "json, name=products" })
  products?: string;
}


export class TagModelHaljsonEmbeddedProductEmbeddedOrganization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: TagModelHaljsonEmbeddedProductEmbeddedOrganizationLinks;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=organizationId" })
  organizationId?: string;
}


export class TagModelHaljsonEmbeddedProductEmbedded extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=organization" })
  organization?: TagModelHaljsonEmbeddedProductEmbeddedOrganization;
}


export class TagModelHaljsonEmbeddedProductLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configs" })
  configs?: string;

  @SpeakeasyMetadata({ data: "json, name=environments" })
  environments?: string;

  @SpeakeasyMetadata({ data: "json, name=members" })
  members?: string;

  @SpeakeasyMetadata({ data: "json, name=permission-groups" })
  permissionGroups?: string;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string;
}


export class TagModelHaljsonEmbeddedProduct extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_embedded" })
  embedded?: TagModelHaljsonEmbeddedProductEmbedded;

  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: TagModelHaljsonEmbeddedProductLinks;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string;
}


export class TagModelHaljsonEmbedded extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=product" })
  product?: TagModelHaljsonEmbeddedProduct;
}


export class TagModelHaljsonLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: string;
}


export class TagModelHaljson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_embedded" })
  embedded?: TagModelHaljsonEmbedded;

  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: TagModelHaljsonLinks;

  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=tagId" })
  tagId?: number;
}
