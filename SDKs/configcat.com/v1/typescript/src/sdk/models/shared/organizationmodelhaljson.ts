import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OrganizationModelHaljsonLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=members" })
  members?: string;

  @Metadata({ data: "json, name=products" })
  products?: string;
}


export class OrganizationModelHaljson extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links" })
  links?: OrganizationModelHaljsonLinks;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=organizationId" })
  organizationId?: string;
}
