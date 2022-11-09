import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ConfigModelHaljsonEmbeddedProductEmbeddedOrganizationLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=members" })
  members?: string;

  @Metadata({ data: "json, name=products" })
  products?: string;
}


export class ConfigModelHaljsonEmbeddedProductEmbeddedOrganization extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links" })
  links?: ConfigModelHaljsonEmbeddedProductEmbeddedOrganizationLinks;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=organizationId" })
  organizationId?: string;
}


export class ConfigModelHaljsonEmbeddedProductEmbedded extends SpeakeasyBase {
  @Metadata({ data: "json, name=organization" })
  organization?: ConfigModelHaljsonEmbeddedProductEmbeddedOrganization;
}


export class ConfigModelHaljsonEmbeddedProductLinks extends SpeakeasyBase {
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


export class ConfigModelHaljsonEmbeddedProduct extends SpeakeasyBase {
  @Metadata({ data: "json, name=_embedded" })
  embedded?: ConfigModelHaljsonEmbeddedProductEmbedded;

  @Metadata({ data: "json, name=_links" })
  links?: ConfigModelHaljsonEmbeddedProductLinks;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=productId" })
  productId?: string;
}


export class ConfigModelHaljsonEmbedded extends SpeakeasyBase {
  @Metadata({ data: "json, name=product" })
  product?: ConfigModelHaljsonEmbeddedProduct;
}


export class ConfigModelHaljsonLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=self" })
  self?: string;

  @Metadata({ data: "json, name=settings" })
  settings?: string;
}


export class ConfigModelHaljson extends SpeakeasyBase {
  @Metadata({ data: "json, name=_embedded" })
  embedded?: ConfigModelHaljsonEmbedded;

  @Metadata({ data: "json, name=_links" })
  links?: ConfigModelHaljsonLinks;

  @Metadata({ data: "json, name=configId" })
  configId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
