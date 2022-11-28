import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiCoreResponsesEntityUriSystemInt64 } from "./apicoreresponsesentityurisystemint64";



export class ApiCoreDtoGrantsGrant extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DatapointType, form, name=DatapointType;" })
  datapointType?: string;

  @SpeakeasyMetadata({ data: "json, name=Entity, form, name=Entity;" })
  entity?: ApiCoreResponsesEntityUriSystemInt64;

  @SpeakeasyMetadata({ data: "json, name=EntityName, form, name=EntityName;" })
  entityName?: string;

  @SpeakeasyMetadata({ data: "json, name=EntityType, form, name=EntityType;" })
  entityType?: string;

  @SpeakeasyMetadata({ data: "json, name=Type, form, name=Type;" })
  type?: string;
}
