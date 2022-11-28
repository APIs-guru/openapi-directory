import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SingleEnvironmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environment_uid" })
  environmentUid: string;
}


export class SingleEnvironment200ApplicationJsonEnvironmentValues extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hovered" })
  hovered?: boolean;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class SingleEnvironment200ApplicationJsonEnvironment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=values", elemType: SingleEnvironment200ApplicationJsonEnvironmentValues })
  values?: SingleEnvironment200ApplicationJsonEnvironmentValues[];
}


export class SingleEnvironment200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: SingleEnvironment200ApplicationJsonEnvironment;
}


export class SingleEnvironmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SingleEnvironmentPathParams;
}


export class SingleEnvironmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  singleEnvironment200ApplicationJsonObject?: SingleEnvironment200ApplicationJson;
}
