import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProductModelHaljsonEmbeddedOrganizationLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=members" })
  members?: string;

  @SpeakeasyMetadata({ data: "json, name=products" })
  products?: string;
}


export class ProductModelHaljsonEmbeddedOrganization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: ProductModelHaljsonEmbeddedOrganizationLinks;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=organizationId" })
  organizationId?: string;
}


export class ProductModelHaljsonEmbedded extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=organization" })
  organization?: ProductModelHaljsonEmbeddedOrganization;
}


export class ProductModelHaljsonLinks extends SpeakeasyBase {
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


export class ProductModelHaljson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_embedded" })
  embedded?: ProductModelHaljsonEmbedded;

  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: ProductModelHaljsonLinks;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string;
}
