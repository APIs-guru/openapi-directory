import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainAlias } from "./domainalias";



export class Domains extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=domainAliases", elemType: DomainAlias })
  domainAliases?: DomainAlias[];

  @SpeakeasyMetadata({ data: "json, name=domainName" })
  domainName?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=isPrimary" })
  isPrimary?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=verified" })
  verified?: boolean;
}
