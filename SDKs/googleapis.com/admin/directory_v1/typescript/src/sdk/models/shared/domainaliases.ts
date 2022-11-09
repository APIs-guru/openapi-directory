import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DomainAlias } from "./domainalias";


export class DomainAliases extends SpeakeasyBase {
  @Metadata({ data: "json, name=domainAliases", elemType: shared.DomainAlias })
  domainAliases?: DomainAlias[];

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
