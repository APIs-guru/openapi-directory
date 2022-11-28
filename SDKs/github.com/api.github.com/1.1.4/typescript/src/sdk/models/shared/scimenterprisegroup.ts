import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ScimEnterpriseGroupMembers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=$ref" })
  dollarRef?: string;

  @SpeakeasyMetadata({ data: "json, name=display" })
  display?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class ScimEnterpriseGroupMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModified" })
  lastModified?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: string;
}


export class ScimEnterpriseGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=externalId" })
  externalId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=members", elemType: ScimEnterpriseGroupMembers })
  members?: ScimEnterpriseGroupMembers[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ScimEnterpriseGroupMeta;

  @SpeakeasyMetadata({ data: "json, name=schemas" })
  schemas: string[];
}
