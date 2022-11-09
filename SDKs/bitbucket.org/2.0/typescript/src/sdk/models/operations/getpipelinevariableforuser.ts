import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPipelineVariableForUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=selected_user" })
  selectedUser: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=variable_uuid" })
  variableUuid: string;
}


export class GetPipelineVariableForUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPipelineVariableForUserPathParams;
}


export class GetPipelineVariableForUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  pipelineVariable?: Map<string, any>;
}
