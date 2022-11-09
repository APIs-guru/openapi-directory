import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApiCoreResponsesEntityUriSystemInt64 } from "./apicoreresponsesentityurisystemint64";


export class ApiCoreDtoGrantsGrant extends SpeakeasyBase {
  @Metadata({ data: "json, name=DatapointType, form, name=DatapointType;" })
  datapointType?: string;

  @Metadata({ data: "json, name=Entity, form, name=Entity;" })
  entity?: ApiCoreResponsesEntityUriSystemInt64;

  @Metadata({ data: "json, name=EntityName, form, name=EntityName;" })
  entityName?: string;

  @Metadata({ data: "json, name=EntityType, form, name=EntityType;" })
  entityType?: string;

  @Metadata({ data: "json, name=Type, form, name=Type;" })
  type?: string;
}
