import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DomainAlias extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=domainAliasName" })
  domainAliasName?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=parentDomainName" })
  parentDomainName?: string;

  @SpeakeasyMetadata({ data: "json, name=verified" })
  verified?: boolean;
}
