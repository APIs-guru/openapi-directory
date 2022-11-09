import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreatePipelineVariableForUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=selected_user" })
  selectedUser: string;
}


export class CreatePipelineVariableForUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreatePipelineVariableForUserPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: Map<string, any>;
}


export class CreatePipelineVariableForUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  pipelineVariable?: Map<string, any>;
}
