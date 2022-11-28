import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConfigModelHaljsonEmbeddedProductEmbeddedOrganizationLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=members" })
  members?: string;

  @SpeakeasyMetadata({ data: "json, name=products" })
  products?: string;
}


export class ConfigModelHaljsonEmbeddedProductEmbeddedOrganization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: ConfigModelHaljsonEmbeddedProductEmbeddedOrganizationLinks;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=organizationId" })
  organizationId?: string;
}


export class ConfigModelHaljsonEmbeddedProductEmbedded extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=organization" })
  organization?: ConfigModelHaljsonEmbeddedProductEmbeddedOrganization;
}


export class ConfigModelHaljsonEmbeddedProductLinks extends SpeakeasyBase {
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


export class ConfigModelHaljsonEmbeddedProduct extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_embedded" })
  embedded?: ConfigModelHaljsonEmbeddedProductEmbedded;

  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: ConfigModelHaljsonEmbeddedProductLinks;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string;
}


export class ConfigModelHaljsonEmbedded extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=product" })
  product?: ConfigModelHaljsonEmbeddedProduct;
}


export class ConfigModelHaljsonLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: string;

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: string;
}


export class ConfigModelHaljson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_embedded" })
  embedded?: ConfigModelHaljsonEmbedded;

  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: ConfigModelHaljsonLinks;

  @SpeakeasyMetadata({ data: "json, name=configId" })
  configId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
