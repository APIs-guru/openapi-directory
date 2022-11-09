import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeletePipelineVariableForUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=selected_user" })
  selectedUser: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=variable_uuid" })
  variableUuid: string;
}


export class DeletePipelineVariableForUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeletePipelineVariableForUserPathParams;
}


export class DeletePipelineVariableForUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;
}
