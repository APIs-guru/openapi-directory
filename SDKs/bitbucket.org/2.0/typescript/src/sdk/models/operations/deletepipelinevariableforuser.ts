import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeletePipelineVariableForUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=selected_user" })
  selectedUser: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=variable_uuid" })
  variableUuid: string;
}


export class DeletePipelineVariableForUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeletePipelineVariableForUserPathParams;
}


export class DeletePipelineVariableForUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;
}
