import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdatePipelineVariableForUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=selected_user" })
  selectedUser: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=variable_uuid" })
  variableUuid: string;
}


export class UpdatePipelineVariableForUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdatePipelineVariableForUserPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class UpdatePipelineVariableForUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  pipelineVariable?: Map<string, any>;
}
