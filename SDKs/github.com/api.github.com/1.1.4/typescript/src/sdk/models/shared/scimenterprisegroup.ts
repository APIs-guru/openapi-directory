import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ScimEnterpriseGroupMembers extends SpeakeasyBase {
  @Metadata({ data: "json, name=$ref" })
  dollarRef?: string;

  @Metadata({ data: "json, name=display" })
  display?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class ScimEnterpriseGroupMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: string;

  @Metadata({ data: "json, name=lastModified" })
  lastModified?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: string;
}


export class ScimEnterpriseGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=externalId" })
  externalId?: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=members", elemType: shared.ScimEnterpriseGroupMembers })
  members?: ScimEnterpriseGroupMembers[];

  @Metadata({ data: "json, name=meta" })
  meta?: ScimEnterpriseGroupMeta;

  @Metadata({ data: "json, name=schemas" })
  schemas: string[];
}
