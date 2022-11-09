import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TagModelHaljsonEmbeddedProductEmbeddedOrganizationLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=members" })
  members?: string;

  @Metadata({ data: "json, name=products" })
  products?: string;
}


export class TagModelHaljsonEmbeddedProductEmbeddedOrganization extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links" })
  links?: TagModelHaljsonEmbeddedProductEmbeddedOrganizationLinks;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=organizationId" })
  organizationId?: string;
}


export class TagModelHaljsonEmbeddedProductEmbedded extends SpeakeasyBase {
  @Metadata({ data: "json, name=organization" })
  organization?: TagModelHaljsonEmbeddedProductEmbeddedOrganization;
}


export class TagModelHaljsonEmbeddedProductLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=configs" })
  configs?: string;

  @Metadata({ data: "json, name=environments" })
  environments?: string;

  @Metadata({ data: "json, name=members" })
  members?: string;

  @Metadata({ data: "json, name=permission-groups" })
  permissionGroups?: string;

  @Metadata({ data: "json, name=self" })
  self?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: string;
}


export class TagModelHaljsonEmbeddedProduct extends SpeakeasyBase {
  @Metadata({ data: "json, name=_embedded" })
  embedded?: TagModelHaljsonEmbeddedProductEmbedded;

  @Metadata({ data: "json, name=_links" })
  links?: TagModelHaljsonEmbeddedProductLinks;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=productId" })
  productId?: string;
}


export class TagModelHaljsonEmbedded extends SpeakeasyBase {
  @Metadata({ data: "json, name=product" })
  product?: TagModelHaljsonEmbeddedProduct;
}


export class TagModelHaljsonLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=self" })
  self?: string;
}


export class TagModelHaljson extends SpeakeasyBase {
  @Metadata({ data: "json, name=_embedded" })
  embedded?: TagModelHaljsonEmbedded;

  @Metadata({ data: "json, name=_links" })
  links?: TagModelHaljsonLinks;

  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=tagId" })
  tagId?: number;
}
