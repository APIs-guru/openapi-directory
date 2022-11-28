import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Privilege extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=childPrivileges", elemType: Privilege })
  childPrivileges?: Privilege[];

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=isOuScopable" })
  isOuScopable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=privilegeName" })
  privilegeName?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceId" })
  serviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName?: string;
}
