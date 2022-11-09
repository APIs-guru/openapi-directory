import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganizationLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=members" })
  members?: string;

  @Metadata({ data: "json, name=products" })
  products?: string;
}


export class EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganization extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links" })
  links?: EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganizationLinks;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=organizationId" })
  organizationId?: string;
}


export class EnvironmentModelHaljsonEmbeddedProductEmbedded extends SpeakeasyBase {
  @Metadata({ data: "json, name=organization" })
  organization?: EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganization;
}


export class EnvironmentModelHaljsonEmbeddedProductLinks extends SpeakeasyBase {
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


export class EnvironmentModelHaljsonEmbeddedProduct extends SpeakeasyBase {
  @Metadata({ data: "json, name=_embedded" })
  embedded?: EnvironmentModelHaljsonEmbeddedProductEmbedded;

  @Metadata({ data: "json, name=_links" })
  links?: EnvironmentModelHaljsonEmbeddedProductLinks;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=productId" })
  productId?: string;
}


export class EnvironmentModelHaljsonEmbedded extends SpeakeasyBase {
  @Metadata({ data: "json, name=product" })
  product?: EnvironmentModelHaljsonEmbeddedProduct;
}


export class EnvironmentModelHaljsonLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=self" })
  self?: string;
}


export class EnvironmentModelHaljson extends SpeakeasyBase {
  @Metadata({ data: "json, name=_embedded" })
  embedded?: EnvironmentModelHaljsonEmbedded;

  @Metadata({ data: "json, name=_links" })
  links?: EnvironmentModelHaljsonLinks;

  @Metadata({ data: "json, name=environmentId" })
  environmentId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
