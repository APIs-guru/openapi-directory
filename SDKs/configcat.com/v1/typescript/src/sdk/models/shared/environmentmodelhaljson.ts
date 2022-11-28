import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganizationLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=members" })
  members?: string;

  @SpeakeasyMetadata({ data: "json, name=products" })
  products?: string;
}


export class EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganizationLinks;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=organizationId" })
  organizationId?: string;
}


export class EnvironmentModelHaljsonEmbeddedProductEmbedded extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=organization" })
  organization?: EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganization;
}


export class EnvironmentModelHaljsonEmbeddedProductLinks extends SpeakeasyBase {
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


export class EnvironmentModelHaljsonEmbeddedProduct extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_embedded" })
  embedded?: EnvironmentModelHaljsonEmbeddedProductEmbedded;

  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: EnvironmentModelHaljsonEmbeddedProductLinks;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string;
}


export class EnvironmentModelHaljsonEmbedded extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=product" })
  product?: EnvironmentModelHaljsonEmbeddedProduct;
}


export class EnvironmentModelHaljsonLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: string;
}


export class EnvironmentModelHaljson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_embedded" })
  embedded?: EnvironmentModelHaljsonEmbedded;

  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: EnvironmentModelHaljsonLinks;

  @SpeakeasyMetadata({ data: "json, name=environmentId" })
  environmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
