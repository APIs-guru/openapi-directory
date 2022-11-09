import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateDefaultProjectRequestBodyEnvironmentEnum {
    Development = "Development"
,    Staging = "Staging"
,    Production = "Production"
}


export class UpdateDefaultProjectRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=environment" })
  environment: UpdateDefaultProjectRequestBodyEnvironmentEnum;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=is_default" })
  isDefault: boolean;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=owner_id" })
  ownerId?: number;

  @Metadata({ data: "json, name=owner_uuid" })
  ownerUuid?: string;

  @Metadata({ data: "json, name=purpose" })
  purpose: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;
}


export class UpdateDefaultProjectRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateDefaultProjectRequestBody;
}


export class UpdateDefaultProject401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class UpdateDefaultProjectResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateDefaultProject200ApplicationJsonAny?: any;

  @Metadata()
  updateDefaultProject401ApplicationJsonObject?: UpdateDefaultProject401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
