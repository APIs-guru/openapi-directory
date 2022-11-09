import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DomainAlias extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @Metadata({ data: "json, name=domainAliasName" })
  domainAliasName?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=parentDomainName" })
  parentDomainName?: string;

  @Metadata({ data: "json, name=verified" })
  verified?: boolean;
}
