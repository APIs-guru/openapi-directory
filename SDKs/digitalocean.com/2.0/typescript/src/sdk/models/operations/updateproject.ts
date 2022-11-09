import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateProjectPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export enum UpdateProjectRequestBodyEnvironmentEnum {
    Development = "Development"
,    Staging = "Staging"
,    Production = "Production"
}


export class UpdateProjectRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=environment" })
  environment: UpdateProjectRequestBodyEnvironmentEnum;

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


export class UpdateProjectRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateProjectPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateProjectRequestBody;
}


export class UpdateProject401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class UpdateProjectResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateProject200ApplicationJsonAny?: any;

  @Metadata()
  updateProject401ApplicationJsonObject?: UpdateProject401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
