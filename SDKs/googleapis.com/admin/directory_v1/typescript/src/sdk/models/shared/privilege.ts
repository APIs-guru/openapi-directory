import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Privilege } from "./privilege";


export class Privilege extends SpeakeasyBase {
  @Metadata({ data: "json, name=childPrivileges", elemType: shared.Privilege })
  childPrivileges?: Privilege[];

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=isOuScopable" })
  isOuScopable?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=privilegeName" })
  privilegeName?: string;

  @Metadata({ data: "json, name=serviceId" })
  serviceId?: string;

  @Metadata({ data: "json, name=serviceName" })
  serviceName?: string;
}
