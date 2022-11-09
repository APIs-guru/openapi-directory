import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SingleEnvironmentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=environment_uid" })
  environmentUid: string;
}


export class SingleEnvironmentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SingleEnvironmentPathParams;
}


export class SingleEnvironment200ApplicationJsonEnvironmentValues extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=hovered" })
  hovered?: boolean;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class SingleEnvironment200ApplicationJsonEnvironment extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=values", elemType: operations.SingleEnvironment200ApplicationJsonEnvironmentValues })
  values?: SingleEnvironment200ApplicationJsonEnvironmentValues[];
}


export class SingleEnvironment200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=environment" })
  environment?: SingleEnvironment200ApplicationJsonEnvironment;
}


export class SingleEnvironmentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  singleEnvironment200ApplicationJsonObject?: SingleEnvironment200ApplicationJson;
}
