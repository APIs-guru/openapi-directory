import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTemplateSchemaPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=template_id" })
  templateId: string;
}


export class GetTemplateSchemaSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}


export class GetTemplateSchemaTemplateSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=$schema" })
  dollarSchema?: string;

  @SpeakeasyMetadata({ data: "json, name=additionalProperties" })
  additionalProperties?: boolean;

  @SpeakeasyMetadata({ data: "json, name=definitions" })
  definitions?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: any[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class GetTemplateSchemaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTemplateSchemaPathParams;

  @SpeakeasyMetadata()
  security: GetTemplateSchemaSecurity;
}


export class GetTemplateSchemaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  authenticationError?: shared.AuthenticationError;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  templateSchema?: GetTemplateSchemaTemplateSchema;
}
