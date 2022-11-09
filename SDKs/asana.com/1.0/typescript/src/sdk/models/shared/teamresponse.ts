import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TeamResponseOrganization extends SpeakeasyBase {
  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;
}


export class TeamResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=html_description" })
  htmlDescription?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=organization" })
  organization?: TeamResponseOrganization;

  @Metadata({ data: "json, name=permalink_url" })
  permalinkUrl?: string;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;
}
