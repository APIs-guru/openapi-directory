import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTemplateSchemaPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=template_id" })
  templateId: string;
}


export class GetTemplateSchemaSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}


export class GetTemplateSchemaRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTemplateSchemaPathParams;

  @Metadata()
  security: GetTemplateSchemaSecurity;
}


export class GetTemplateSchemaTemplateSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=$schema" })
  dollarSchema?: string;

  @Metadata({ data: "json, name=additionalProperties" })
  additionalProperties?: boolean;

  @Metadata({ data: "json, name=definitions" })
  definitions?: Map<string, any>;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=properties" })
  properties?: Map<string, any>;

  @Metadata({ data: "json, name=required" })
  required?: any[];

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class GetTemplateSchemaResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  authenticationError?: shared.AuthenticationError;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  templateSchema?: GetTemplateSchemaTemplateSchema;
}
