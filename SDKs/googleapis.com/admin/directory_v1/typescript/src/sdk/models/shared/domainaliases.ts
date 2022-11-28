import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainAlias } from "./domainalias";



export class DomainAliases extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domainAliases", elemType: DomainAlias })
  domainAliases?: DomainAlias[];

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
